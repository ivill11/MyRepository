const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const sessionStore = require('connect-diskdb')(session);
const store = new sessionStore({path: './db', name: 'sessions'});
const db = require('diskdb');
db.connect('./db/', ['articles', 'users']);
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    store: store
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.send('index.html');
});

app.get('/articles', (req, res) => {
    res.json(db.articles.find());
});

app.get('/article/:id', (req, res) => {
    res.json(db.articles.findOne({id: req.params.id}));
});

app.post('/articles', (req, res) => {
    const article = {
        id: req.body.id,
        title: req.body.title,
        summary: req.body.summary,
        createdAt: req.body.createdAt,
        author: req.body.author,
        image: req.body.image,
        content: req.body.content,
        tags: req.body.tags
    };
    res.json(db.articles.save(article));
});

app.put('/article/:id', (req, res) => {
    const editArticle = db.articles.findOne({id: req.params.id});
    if (req.body.title) {
        editArticle.title = req.body.title;
    }
    if (req.body.summary) {
        editArticle.summary = req.body.summary;
    }
    if (req.body.image) {
        editArticle.image = req.body.image;
    }
    if (req.body.content) {
        editArticle.content = req.body.content;
    }
    db.articles.update({id: req.params.id}, editArticle);
    res.sendStatus(200);
});


app.delete('/article/:id', (req, res) => {
    res.json(db.articles.remove({id: req.params.id}));
});


////////////////////////////////////////////////////////////////////////////////////////////////////
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => {
    const error = user ? null : new Error('deserialize');
    done(error, user)
});

passport.use('login', new LocalStrategy({
        passReqToCallback: true
    },
    (req, username, password, done) => {
        const user = db.users.findOne({username: username});
        if (!user) {
            console.log('User Not Found with username ' + username);
            return done(null, false);
        }
        if (password !== user.password) {
            console.log('Invalid Password');
            return done(null, false);
        }
        return done(null, user);
    })
);

app.post('/login', passport.authenticate('login'), (req, res) => res.send(req.user.username));

app.get('/logout', (req, res) => {
    req.logout();
    res.sendStatus(200);
});

app.get('/username', (req, res) => req.user ? res.send(req.user.username) : res.sendStatus(401));
////////////////////////////////////////////////////////////////////////////////////////////////////

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});