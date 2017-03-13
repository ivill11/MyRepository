//параметры вводятся в ' ' пример - (editArticle('1', { title: 'newTitle', content: 'newContent' }))
var content = (function () {
    var articles = [
        {
            id: '1',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2016-02-27T23:00:00+0300'),
            author: 'Петров Петр',
            image: './src/din-loko-04-10-16.jpg',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'
        }
        ,
        {
            id: '2',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2006-02-27T23:00:00+0300'),
            author: 'Петров Петр',
            image: './src/din-loko-04-10-16.jpg',
            content: 'Гости создали больше опасных    моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'
        }
        ,
        {
            id: '3',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2016-02-27T23:00:00+0300'),
            author: 'Петров Петр',
            image: './src/din-loko-04-10-16.jpg',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'
        }
        ,
        {
            id: '4',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2017-01-27T23:00:00+0300'),
            author: 'Иванов Иван',
            image: './src/din-loko-04-10-16.jpg',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'
        }
        ,
        {
            id: '5',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2017-02-24T23:00:00+0300'),
            author: 'Петров Петр',
            image: './src/din-loko-04-10-16.jpg',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'
        }
        ,
        {
            id: '6',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2011-02-27T23:00:00+0300'),
            author: 'Иванов Иван',
            image: './src/din-loko-04-10-16.jpg',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'
        },
        {
            id: '7',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2017-01-27T23:00:00+0300'),
            author: 'Петров Петр',
            image: './src/din-loko-04-10-16.jpg',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'
        },
        {
            id: '8',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2017-01-27T23:00:00+0300'),
            author: 'Иванов Иван',
            image: './src/din-loko-04-10-16.jpg',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'
        },
        {
            id: '9',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2017-01-27T23:00:00+0300'),
            author: 'Семенов Семен',
            image: './src/din-loko-04-10-16.jpg',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'
        }
        ,
        {
            id: '10',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2015-01-27T23:00:00+0300'),
            author: 'Иванов Иван',
            image: './src/din-loko-04-10-16.jpg',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'
        }
        ,
        {
            id: '11',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2015-01-27T23:00:00+0300'),
            author: 'Семенов Семен',
            image: './src/din-loko-04-10-16.jpg',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'
        },
        {
            id: '12',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2017-02-23T23:00:00+0300'),
            author: 'Иванов Иван',
            image: './src/din-loko-04-10-16.jpg',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'
        }
        ,
        {
            id: '13',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2017-02-23T23:00:00+0300'),
            author: 'Семенов Семен',
            image: './src/din-loko-04-10-16.jpg',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'
        },
        {
            id: '14',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2017-10-27T23:00:00+0300'),
            author: 'Иванов Иван',
            image: './src/din-loko-04-10-16.jpg',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'
        },
        {
            id: '15',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2017-11-27T23:00:00+0300'),
            author: 'Семенов Семен',
            image: './src/din-loko-04-10-16.jpg',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'
        },
        {
            id: '16',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2017-11-27T23:00:00+0300'),
            author: 'Иванов Иван',
            image: './src/din-loko-04-10-16.jpg',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'
        },
        {
            id: '17',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2012-02-27T23:00:00+0300'),
            author: 'Семенов Семен',
            image: './src/din-loko-04-10-16.jpg',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'
        },
        {
            id: '18',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2012-02-27T23:00:00+0300'),
            author: 'Иванов Иван',
            image: './src/din-loko-04-10-16.jpg',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'
        },
        {
            id: '19',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2017-02-27T23:00:00+0300'),
            author: 'Семенов Семен',
            image: './src/din-loko-04-10-16.jpg',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'
        },
        {
            id: '20',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2017-02-01T23:00:00+0300'),
            author: 'Иванов Иван',
            image: './src/din-loko-04-10-16.jpg',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'
        },
        {
            id: '21',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2017-02-01T23:00:00+0300'),
            author: 'Семенов Семен',
            image: './src/din-loko-04-10-16.jpg',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'
        }
    ]

    function getArticle(id) {
        id = id || null;
        if (typeof id === 'string') {
            for (var i = 0; i < articles.length; i++) {
                if (id === articles[i].id) {
                    return (articles [i]);
                }
            }
        }
    }

    function removeArticle(id) {
        id = id || null;
        if (typeof id === 'string') {
            for (var i = 0; i < articles.length; i++) {
                if (id === articles[i].id) {
                    articles.splice(i, 1);
                    return true;
                }
            }
        }
        return false;
    }

    function validateArticle(article) {
        if (article === null || article === undefined) {
            return false
        }
        if ((typeof article.id === 'string') && (typeof article.title === 'string' && article.title.length <= 100)
            && (typeof article.summary === 'string' && article.summary.length <= 200)
            && (typeof article.author === 'string') && (typeof article.content === 'string') && ((article.createdAt instanceof Date))) {
            return true;
        }
        return false;
    }

    function addArticle(article) {
        if (article === null || article === undefined) {
            return false
        }
        if (validateArticle(article) == true) {
            articles.push(article);
            return true;
        }
        return false;
    }

    function editArticle(id, article) {
        rawArticle = articles.find(function (a) {
            return a.id === id;
        });
        if (!rawArticle) {
            return false;
        }
        var newArticle = Object.assign(rawArticle, article);
        if (!validateArticle(newArticle)) {
            return false;
        }
        articles.map(function (a) {
            return a.id !== id ? a : newArticle;
        });
        return true;
    }

    function getArticles(skip, top, filterConfig) {
        skip = skip || 0;
        top = top || 10;
        var artCopy = articles.slice();
        artCopy.sort(function (a, b) {
            if (a.createdAt > b.createdAt) return 1;
            if (a.createdAt < b.createdAt) return -1;
            return 0;
        });
        if (filterConfig) {
            artCopy = artCopy.filter(function (a) {
                var result = true;
                if (filterConfig.author) {
                    result = result && filterConfig.author === a.author;
                }
                if (filterConfig.createdAt) {
                    var date = filterConfig.createdAt.split('-');
                    result = result && a.createdAt.getFullYear() === +date[0];
                    result = result && a.createdAt.getMonth() + 1 === +date[1];
                    result = result && a.createdAt.getDate() === +date[2];
                }
                return result;
            })
        }
        return artCopy.slice(skip, skip + top);

    }

    return {
        getArticle: getArticle,
        removeArticle: removeArticle,
        validateArticle: validateArticle,
        addArticle: addArticle,
        editArticle: editArticle,
        getArticles: getArticles
    }
})();

var dom = (function () {

    var template = document.getElementById('template');
    var tape = document.querySelector('.tape');

    Date.prototype.getMonthName = function () {
        return Date.locale.month_names[this.getMonth()];
    };
    Date.prototype.prettyFormat = function () {
        return (this.getDate()) + ' ' + this.getMonthName() + ' ' + this.getHours() + ':' + this.getMinutes();
    };
    Date.locale = {
        month_names: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    };

    function fillTemplate(article) {
        var copy = template.querySelector('.news').cloneNode(true);
        copy.id = article.id;
        if (article.image)
            copy.querySelector('img').src = article.image;
        copy.querySelector('h3').innerText = article.title;
        copy.querySelector('p').innerText = article.summary;
        copy.querySelector('.author').innerText = article.author + ' ' +
            article.createdAt.prettyFormat();
        return copy;
    }

    function displayArticles(articles) {
        if (tape) {
            for (article of articles) {
                tape.appendChild(fillTemplate(article));
            }
            return true;
        }
        return false;
    }

    function removeArtice(id) {
        var found = document.getElementById(id);
        if (found) found.remove();
        return content.removeArticle(id);
    }

    function editArtice(id, atricle) {
        var sucess = content.editArticle(id, article);
        if (sucess) {
            var found = document.getElementById(id);
            if (found) found.parentNode.replaceChild(
                fillTemplate(content.getArticle(id)),
                found
            );
            return true;
        }
        return false;
    }

    return {
        display: displayArticles,
        remove: removeArtice,
        edit: editArtice
    }
})();

var user = null;
//чтобы деавторизироваться в консоли набрать 1)user = null 2)authorize()
function authorize() {
    if (user) {
        document.querySelector('.user').innerText = 'Hi, ' + user;
        document.querySelector('.quit').style.display = 'inline';
        document.querySelector('.add').style.display = 'inline';
        document.querySelector('.log-in').style.display = 'none';
        for(var btn of document.querySelectorAll('.autbtn')){
            btn.style.display = 'block';
        }
    } else {
        document.querySelector('.user').innerText = 'Hi, ANONUMOS';
        document.querySelector('.quit').style.display = 'none';
        document.querySelector('.log-in').style.display = 'inline';
        document.querySelector('.add').style.display = 'none';
        for(var btn of document.querySelectorAll('.autbtn')){
            btn.style.display = 'none';
        }
    }
}

authorize();
user = 'ivill11';
dom.display(content.getArticles())