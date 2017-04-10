const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const articles = [
  {
    id: '1',
    title: '«Она не нападет, даже если ты болеешь за «Миллуолл». Самый хищный маскот АПЛ',
    summary: 'Дария Конурбаева поговорила с символом «Кристал Пэлас».',
    createdAt: new Date('2017-03-23T15:10:00+0300'),
    author: 'Дария Конурбаева',
    image: 'https://s5o.ru/storage/simple/ru/edt/c8/3c/d7/2f/ruef6073fec94.jpg',
    content: '«Запомни: она не может на тебя напасть,' +
        ' – успокаивает меня Джонатан, вынося на по-весеннему теплое солнце массивную птицу.' +
        ' – Кайла выглядит сурово и может казаться агрессивной, но реальную агрессию может проявлять только ко мне,' +
        ' потому что знает, что у меня есть еда. Именно поэтому мы никогда не позволяем посторонним ее кормить».' +
        'Орел расправляет крылья размахом больше двух метров и тяжело взлетает в воздух.В 1973-м Малкольм Эллисон был назначен тренером «Кристал Пэлас» и, очевидно, решил, что хрустальный дворец – слишком ненадежная конструкция для олицетворения футбольного клуба. Ребрендинг предполагал не только изменение официальных цветов с лазурно-бордовых, с которыми сегодня ассоциируется скорее «Астон Вилла», на яркие красно-синие.' +
        ' «Стекольщики» превратились в «орлов»: на новом логотипе хищная птица взлетала из давно разрушенного в реальности Хрустального дворца, как феникс из пепла – и подозрительно напоминала эмблему «Бенфики». Поговаривают, что Эллисон особо не скрывал заимствования,' +
        ' и уверял болельщиков, что орел должен стать новым, куда более агрессивным и воинственным символом клуба.Физическое воплощение вымышленного маскота нашли только в XXI веке в 40 км к юго-востоку от Лондона: в питомнике «Орлиные высоты» («Eagle Heights»),' +
        ' который в 1990-е открыла семья энтузиастов Алан и Салли Эймс.«Отец с детства обожал птиц, – рассказывает их сын Джонатан, который проводит мне экскурсию по центру. – Он с малых лет выкармливал птенцов на заднем дворе и настолько любил животных, что у нас всегда, сколько я себя помню, в доме были какие-то птицы.А в 1996-м мы открыли центр, и я с десяти лет начал помогать родителям здесь».' +
        'Когда птиц конфисковали у похитителей, то попытались вернуть в дикую природу.' +
        ' Крылатые псевдолюди за год едва не умерли с голоду: в детстве не наученные охотиться, они привыкли получать еду от человека и нападали на школьников во время обедов и посетителей уличных ресторанов. Птиц вновь поселили в неволе, но для образовательных программ и даже зоопарков они оказались слишком агрессивными.В 2000-м об уникальных орлах узнали в Eagle Heights и начали процесс по вывозу в Британию.' +
        ' Ситуация осложнялась происхождением: по документам птицы считались' +
        ' родившимися на воле, и канадское законодательство не позволяло вывезти из их страны без особой на то причины. Переговоры и бумажная волокита заняли несколько месяцев: к тому моменту зоопарк, содержавший сестру Кайлы, не выдержал и усыпил агрессивную птицу. Узнав об этом, Алан Эймс лично прилетел в зоопарк Торонто и следил за единственной оставшейся в живых орлицей до ее переезда в Англию.' +
        'С момента вынужденной, но в итоге счастливой миграции через океан Кайла зажила новой и куда более увлекательной жизнью. «Она реально считает себя человеком, поэтому у нее нет животного страха чего-либо, который есть у животных, рожденных на воле. В любом пространстве, с любым количеством людей она считает себя самым большим, страшным и опасным субъектом, которому ничего не может угрожать.' +
        ' Так что все активности ее только радуют: считайте, что это такой способ самоутвердиться в статусе самой уважаемой особи в округе».В Англии Кайла участвует в образовательных лекциях для детей, различных телевизионных шоу и даже снялась на обложке альбома Kings of Leon и в паре журнальных фотосессий группы.Но еще более популярной птицу сделала должность маскота «Кристал Пэлас».«Футбольный клуб связался с нами несколько лет назад с вопросом:' +
        ' «Нет ли у вас подходящего орла для нас?». Как я уже говорил, чудовищно тяжело найти зверя,' +
        ' который бы не испытывал страха перед такой толпой людей и антуражем большого матча. Конечно, можно привезти птицу, которая пролетит сколько нужно, но будет при этом в ужасе: мы не хотим лишний раз так травмировать животных».Для бесстрашной Кайлы проблемы в больших толпах людей нет. Процесс работы на домашних матчах довольно простой: птицу сажают в клетку и вместе с как минимум двумя сотрудниками центра везут на «Селхерст Парк».' +
        ' Перед матчем орлица спокойно перемещается по территории вместе с дрессировщиками (на лапу предусмотрительно цепляют датчик, который позволит найти ее в случае форс-мажора), совершает пару кругов до и в перерыве матча и радует зрителей.',
  },
  {
    id: '2',
    title: 'Самый простой гид по контрактам в НХЛ',
    summary: 'Разберется даже школьник.',
    createdAt: new Date('2017-03-22T12:45:00+0300'),
    author: 'Родион Власов',
    image: 'https://s5o.ru/storage/simple/ru/edt/3c/95/64/71/ruea7c57c0ebf.jpg',
    content: 'Чем регулируются финансы НХЛ?' +
        'Коллективное соглашение (Collective Bargaining Agreement, CBA, коллективный договор) – это контракт между лигой и профсоюзом игроков, заключающийся на несколько лет и содержащий все правила, по которым функционирует лига.' +
        ' В коллективном соглашении прописан регламент установления потолка зарплат,' +
        ' максимальных и минимальных заработков спортсменов, правил проведения обменов, правил драфта и прочего.Нынешнее коллективное соглашение было подписано в январе 2013-го и будет действовать вплоть до сентября 2022 года.' +
        ' Однако, НХЛ или Ассоциация игроков могут досрочно расторгнуть Коллективное соглашение в сентябре 2020-го, за год уведомив другую сторону об этом. Первый контракт, который подписывает игрок младше 25 лет — это контракт новичка.' +
        ' В зависимости от его возраста срок контракта разнится, и это деталь, которую знают даже не все генеральные менеджеры. «Ванкувер», например, по ошибке предложил Никите Трямкину не двухлетний, а трехлетний контракт новичка, за что «Кэнакс» были отчитаны лигой. Однако в данной таблице есть одно исключение: европейские игроки в возрасте 25-27 лет тоже должны подписать свой первый контракт в НХЛ в статусе новичка и на один год.' +
        ' Самый знакомый нам пример – неудавшийся «вингер для Кросби» Сергей Плотников.Главная особенность контракта новичка — он всегда двусторонний, то есть команда в случае необходимости может спустить игрока в фарм-клуб. Соответственно, договор предусматривает разную величину зарплаты – при игре в НХЛ и в фарме. Однако отдельным пунктом в контракте может быть прописан запрет на ссылку в другие лиги – многие европейцы этого не любят. Максимальный размер контракта новичка – 925 тысяч долларов' +
        ' и останется таковым до окончания нынешнего коллективного соглашения.Другая фишка контракта новичка в том, что его действие может быть «передвинуто» на год, если игрок провел меньше 10 игр в НХЛ после подписания.' +
        ' Этим правилом часто пользуются менеджеры клубов НХЛ для просмотра молодых игроков. Например, Михаил Сергачев в июле этого года подписал контракт новичка с «Монреалем», который действует с сезона-2016/17 по сезон-2018/19. Осенью он сыграл три матча в НХЛ, после чего был отправлен в юниорскую лигу. Теперь если Сергачев не сыграет еще семь матчей в этом чемпионате (чего не случится на 99%), срок его контракта начнет отсчет с сезона-2017/18 по 2019/20.Особый вид контрактов – соглашения с игроками старше 35 лет.' +
        ' Если игрок заканчивает карьеру во время действия подобного соглашения,' +
        ' то весь его кэпхит (средняя по контракту зарплата за сезон) остается в платежке команды. Самый известный прецедент последнего времени создал Павел Дацюк, когда завершил карьеру в НХЛ за год до истечения своего контракта с кэпхитом в 7,5 млн долларов. В итоге «Детройту» пришлось скинуть мертвое место в потолке зарплат в финансово слабую «Аризону».Когда появился и зачем вообще нужен потолок зарплат?Исторически НХЛ была едва ли не первой лигой, которая ввела ограничение заработной платы в связи с Великой депрессией, но после выздоровления американской экономики от него отказались.' +
        ' Вернуться к ограничению зарплат пришлось в 2004-м — на тот момент НХЛ была единственной из большой четверки американских лиг, которая вообще никак не ограничивала суммы в контрактах, и, более того, клубы тратили почти 75% своих доходов как раз на зарплаты — невиданная для США цифра. Целью введения потолка было не столько обеспечение равенства команд, как ошибочно думают многие, сколько ограничение сверхдоходов игроков.' +
        ' Равенство же в лиге существовало и без всякого потолка' +
        ' — в двух последних финалах долокаутной эры играли бюджетные «Калгари», «Тампа», «Анахайм» и «Нью-Джерси».Самое первое ограничение зарплат в 2005-м было крохотным по нынешним меркам: 39 млн верхнего потолка и 21 млн – нижнего. Долокаутные «Детройт» и «Рейнджерс» тратили почти 80 млн, а средняя платежка составляла 44 млн.Сначала в CBA изменение потолка прописывалось на каждый год. Игроки получают ровно 50% от всех хоккейных доходов лиги. В старом коллективном соглашении эта доля колебалась в зависимости от доходов лиги в промежутке 54-57,' +
        ' и из-за споров об этих процентах половина сезона-2012/13 была потеряна из-за локаута. Соответственно, потолок зарплат для команд лиги равен доле доходов игроков, поделенных на 30 (а скоро 31) команд.Что происходит при нарушении потолка?Во всех командах лиги есть большой штаб менеджеров, ассистентов и аналитиков, которые следят за клубными финансами. Упасть ниже пола в НХЛ практически невозможно, так как бедные команды всегда могут обменять какой-нибудь из «плохих» контрактов. Выход за потолок чаще всего происходит за счет бонусов за выступление игрока, и в случае нарушения сумма превышения записывается' +
        ' в платежку на следующий сезон. Размер «минималки» на каждый год точно расписан в CBA. В сезоне-2016/17 она составляет 575 тысяч долларов.',
  },
  {
    id: '3',
    title: '«Барселона» совершает ошибку, отказываясь от Сампаоли',
    summary: 'Станислав Рынкевич – о жизни после Луиса Энрике.',
    createdAt: new Date('2017-03-22T21:20:00+0300'),
    author: 'Станислав Рынкевич',
    image: 'https://s5o.ru/storage/simple/ru/edt/9c/34/33/11/rueb8b9d6ece2.jpg',
    content: 'Луис Энрике сделал подарок всем футбольным журналистам, заблаговременно объявив о собственном уходе из «Барселоны». Тема следующего тренера каталонской команды перестала проходить по разряду домыслов. Вопросы, начинавшиеся со слова «если», стали начинаться с главного – «кто».На сегодняшний день каталонская пресса составила шорт-лист из четырех кандидатов. В нем нет Хорхе Сампаоли, и это колоссальный промах. Не журналистов, руководства «Барселоны».Главный критерий выбора, обозначенный самим клубом – это должен быть «наш сукин сын».' +
        ' Человек, который знает клуб изнутри, обладает меметичным ДНК «Барселоны» и исповедует кройффизм. Интересно, как в официальных пресс-релизах между строк читается отношение к нынешнему главному тренеру: все благодарны Лучо за трофеи и победу над «ПСЖ», но все-таки он еретик, конечно, сжегший на южноамериканском костре наш любимый контроль мяча.Хуан Карлос Унсуэ и Эрнесто Вальверде начинали карьеру в «Барселоне» при Кройффе, хотя и были игроками глубокого запаса.' +
        ' Эйсебио Сакристан и особенно Роналд Куман – фигуры куда более масштабные. У обоих при этом был опыт работы в «Барсе» на тренерских позициях, Унсуэ накапливает этот опыт прямо сейчас.Шансы Унсуэ стать наследником Лучо полностью зависят от результатов нынешнего сезона. За пределами тренерской работы Энрике считается невероятно доброжелательным парнем и хорошим другом. «Я не способен на него рассердиться, мы старые друзья», – заявил Лучо про своего помощника. Окей, эти двое договорились.Вальверде мог возглавить «Барселону» дважды.' +
        ' В первый раз ему предпочли Тито Виланову.  Но после Бьелсы любая футбольная система будет казаться более сбалансированной' +
        ' Но, господи, как же это будет скучно и пресно по сравнению с назначением Сампаоли!Разводя философию о преемственности, руководство «Барселоны» походит на тех болельщиков, которые не знают, что происходило в Каталонии до Пепа Гвардиолы. Восхваляя движение по инерции, они не вспоминают, что привело к самому движению.Основанный швейцарцем клуб становился интересен большой Европе только когда в нем работали именно такие гениальные «аутсайдеры»,' +
        ' каким сегодня является Сампаоли: венгерская диаспора при Даучике, диктатура аргентинца Эленио Эрреры, вся голландская школа Михелса, Кройффа, ван Гала и Райкарда. Только благодаря импортированному голландскому футболу «Барселона» в начале девяностых из самобытных провинциалок расцвела в европейскую светскую львицу.Сампаоли никогда не работал в «Барселоне», зато на поле он организует тот футбол, который в Каталонии превозносили из поколения в поколение. Его помощником в сборной Чили был Хуанма Лильо – один из лучших теоретиков (но не практиков) современного футбола, второй после Кройффа человек, повлиявший на Гвардиолу как на тренера.' +
        'По окончании карьеры футболиста Пеп первым делом поехал общаться с Марсело Бьелсой. Их первый разговор об игре длился' +
        ' 11 часов, и в нем в качестве наглядных примеров участвовала попадавшаяся под руку мебель. Неудивительно, что в голосовании болельщиков «Барселоны» лидирует именно нынешний тренер «Севильи».Думаю, в голосовании среди нападающих каталонской команды Сампаоли тоже победил бы с большим отрывом. Месси неоднократно признавался в любви к соотечественнику, выигрывавшему Кубок Америки, а Неймар приглашал специалиста к себе домой и спрашивал,' +
        ' не хочет ли тот возглавить сборную Бразилии. Видимо, Месси лишился привилегии назначать себе тренеров после неудачи с Татой Мартино.' +
        ' Кстати, Мартино после ухода прямо говорил, что голландско-каталонское лобби в «Барселоне» работает очень мощно, затрудняя вхождение для сторонних людей.Самые успешные периоды в истории «Барселоны» наступали после того, как команду доверяли специалисту, не боящемуся совершать нечто новое. Смелые тренерские идеи, пропущенные через высочайший кадровый потенциал «Барселоны», на выходе выдавали новый глобальный тренд. На несколько лет футбол «Барсы» становился нарицательным, синонимом идеальной игры.Из меня прогнозист так себе, но я не верю, что Куман, Вальверде, Унсуэ или Эйсебио способны встать в один ряд с прежними новаторами.' +
        ' Они могут поработать хорошо, в их назначении меньше риска, но мы не будем восхищаться их футболом. «Севилья» в этом году все делает правильно,' +
        ' это одна из самых зрелищных команд  в Европе, но ей ощутимо не хватает ресурсов для того, чтобы полностью реализовывать план Сампаоли.' +
        'А руководству «Барсы» не хватает смелости. Я могу их понять – в отличие от меня они в случае чего рискуют работой. Но разговоры о сохранении идентичности каталонского клуба через инерционные решения лживы. Назначить Сампаоли – вот это было бы по-каталонски.',
  },
  {
    id: '4',
    title: '5 самых влиятельных футболистов Европы',
    summary: 'Уэйн Руни грозится подписать новый контракт и стать одним из главных людей в «МЮ».' +
        ' SPORTS NEWS собирает футболистов, которые всерьез влияют далеко не только на игру своих клубов.',
    createdAt: new Date('2014-02-21T11:46:00+0300'),
    author: 'Станислав Рынкевич',
    image: 'http://s5o.ru/storage/simple/ru/edt/77/00/26/15/rue79613f9802.jpeg',
    content: 'Джон Терри «Послушайте, он вообще-то вкладывает немало денег в этот клуб и имеет право знать, что происходит в раздевалке, чем довольна команда, а чем – нет. Я рад, что он готов ко мне прислушаться, а мне всегда есть, что сказать», – говорил в 2009 году Джон Терри о Романе Абрамовиче. За два года до того Абрамович одолжил капитану «Челси» свою огромную яхту, чтобы Терри провел там медовый месяц с женой. Три года спустя Терри вроде как написал Абрамовичу письмо, в котором подробно изложил, почему тренерские методы Андре Виллаша-Боаша не подходят лондонскому клубу. Виллаш-Боаш был уволен.' +
        'Не будет преувеличением сказать, что Джона Терри в Англии не любит никто, кроме болельщиков «Челси» – в том числе потому,' +
        ' что его негативный публичный имидж не мешает ему сохранять влияние на самого богатого человека в английском футболе и многих игроковНекоторые английские журналисты уверены, что Капелло покинул сборную Англии не из-за того, что разозлился на чиновников, а именно потому, что Терри-капитан помогал ему сохранять авторитарный дух в команде и держать под контролем звезд, которые привыкли к либерализму Эрикссона и нерешительности Макларена. Ну и стоит добавить, что Терри первым из игроков «Челси» заговорил о возвращении Жозе Моуринью – и теперь играет у него практически без замен.' +
        ' Икер Касильяс. Непонимание между капитаном мадридского «Реала» и Жозе Моуринью стало одной из причин отставки португальского специалиста. В прошлом сезоне Жозе к удивлению многих усадил Икера в запас, сославшись на чисто игровые мотивы. Тем не менее, испанская пресса довольно быстро выяснила, что причина раздора лежит глубже.' +
        ' «Проблема всегда назревает, когда кто-то ставит себя выше других. Я не собираюсь ставить ваших любимчиков в состав. Что бы я сделал иначе на посту тренера «Реала»?' +
        ' Купил бы Диего Лопеса после первого же сезона», – скажет много позже Моуринью.Marca писала, что Касильяс и Рамос вынесли президенту Флорентино Пересу ультиматум – либо уходит Жозе, либо уйдут они. Перес все отрицал, но практически тут же жена Касильяса и известная в Испании журналистка Сара Карбонеро подтвердила, что между тренером и половиной команды действительно пробежала черная кошка. «К Икеру надо относиться с большим уважением, его все любят. Тренер говорил о нем в непозволительном тоне», – комментировал ситуацию Пепе, после чего был усажен в запас. Лионель Месси. ' +
        'Ангельский лик скромника Лео скрывает под собой злобную натуру серого кардинала «Барселоны», уверены представители многих СМИ. Кандидатура Мартино в качестве нового тренера каталонского клуба якобы всплыла после того, как ее лоббировали Лео и его отец Хорхе, чьим хорошим другом Херардо Мартино является. Пусть сам Месси отрицал свою причастность, Мартино на пресс-конференции сказал: «Думаю, их с Хорхе мнение сыграло свою роль».После перехода Неймара в «Барселону» только было и разговоров о том, уживутся ли два медведя в одной берлоге. Бразилец не раз заявлял, что его мечтой было играть вместе с лучшим футболистом мира,' +
        ' и Лео не стал ревновать к звездному новичку, по крайней мере, на поле. Впрочем, когда выяснилось, что контракт Неймара может быть более солидным, чем у аргентинца, его представители немедленно потребовали у руководства «Барселоны» пересмотра условий.' +
        'Наконец, не забылась еще история от El Confidencial, согласно которой Месси может довольно жестко критиковать молодых игроков на тренировке под молчаливое согласие ветеранов команды.' +
        ' Больше всего, со слов издания, доставалось Тельо и Алексису Санчесу. Если это правда, то надо признать, что чилийцу такая критика пошла на пользу.Андреа ПирлоАндреа Пирлою Фактически Андреа Пирло является помощником тренера сборной Италии. В ряде матчей, например, в товарищеской игре против Сан-Марино, Чезаре Пранделли специально держал лидера «Ювентуса» и Скуадры Адзурры на поле до финального свистка, чтобы протестировать новые сочетания в полузащите и нападении. Ведь никто лучше Пирло не расскажет о том, кто не туда побежал, залез не в ту зону и еще великое множество нюансов.Джаинлуджи Буффон.' +
        ' Капитан «Ювентуса» – один из двух самых уважаемых футболистов в команде. Популярность Буффона сильно выросла после Кальчополи, когда он не последовал примеру горстки сбежавших и сохранил верность «бьянконери», отыграв сезон в серии B. К мнению ветеранов – Буффона и Пирло – прислушиваются даже в вопросах трансферной политики.' +
        ' Недавно Антонио Конте интересовался, не разрушит ли Пабло Освальдо атмосферу в раздевалке, и только после беседы с сенаторами одобрил переход скандального форварда..',
  },
  {
    id: '5',
    title: 'Подготовка к подготовке: «зубры» вернулись на лед',
    summary: 'Официально кемп сборной стартует ближе к концу месяца, но уже сегодня многие хоккеисты вышли на лед,' +
        ' чтобы подойти к старту серьезных тренировок в хорошей физической форме.',
    createdAt: new Date('2017-02-24T23:00:00+0300'),
    author: 'Михайлов Никита',
    image: 'http://borisov-e.info/wp-content/uploads/2016/10/din-loko-04-10-16.jpg',
    content: 'В занятии принимали участие «зубры»: Андрей Степанов, Александр Кулаков, Никита Комаров, Сергей Дрозд, Евгений Ковыршин, Артем Волков,' +
        ' Данила Карабань, Дмитрий Коробов, Илья Шинкевич, Роман Граборенко. Кроме того, на льду тренировались и представители «Динамо-Молодечно».В отсутствии главного тренера тренировкой команды руководил Сергей Стась, впрочем, программа занятия не сильно отличалась от той, по которой обычно работает национальная команда.' +
        ' На этой неделе тренировки будут носить втягивающий характер. После небольшого отдыха игрокам необходимо вновь войти в рабочий ритм, поэтому никто не требует от хоккеистов выкладываться на 100%.- Дня 3-4 я полностью отдыхал. Вообще не занимался физическими нагрузками. Потом начал ходить в бассейн, иногда в зал. В принципе, проводил время в режиме активного отдыха. Все время провел дома, никуда не уезжал.' +
        'После тренировки на несколько наших вопросов ответил Илья Шинкевич, который провел весь небольшой отпуск дома:Сегодня начался подготовительный сбор, расскажи, насколько тяжело сейчас войти в рабочий ритм?- Совсем не тяжело. Первая тренировка была легкой, просто вкатились и почувствовали нагрузку.Какие планы на ближайшее время у тебя, и у сборной в целом?- Будем входить в рабочий режим.' +
        'С каждой тренировкой будем увеличивать нагрузку, а когда начнется основной сбор будем работать на полную.',
  },
  {
    id: '6',
    title: 'Все наши в НХЛ. Как они провели первую половину сезона',
    summary: 'Что там за океаном?',
    createdAt: new Date('2011-01-14T23:00:00+0300'),
    author: 'Родион Власов',
    image: 'https://cdn.tribuna.com/fetch/?url=http%3A%2F%2Ftu9srvbirvvtmir3cg1lzglhlnrozxbyb3zpbmnllmnvbq00.g00.theprovince.com%2Fg00%2F2_dGhlcHJvdmluY2UuY29t_%2FTU9SRVBIRVVTMiRodHRwOi8vd3BtZWRpYS50aGVwcm92aW5jZS5jb20vMjAxNy8wMS9yZWNvcmRpbmctMS5naWY%252Fdz04NzImaD00OTEmaTEwYy5tYXJrLmltYWdlLnR5cGU%253D_%24%2F%24%2F%24%2F%24',
    content: 'Вратари : Сергей Бобровский, «Коламбус» – 28 побед в 37 матчах, 93,2% отраженных бросков, коэффициент надежности – 1,97' +
        'Андрей Василевский, «Тампа-Бэй» – 10 побед в 23 матчах, 90,7% ОБ, КН – 2,86' +
        'Семен Варламов, «Колорадо» – 6 побед в 23 матчах, 89,8% ОБ, КН – 3,38' +
        'Антон Худобин, «Бостон» – 1 победа в 7 матчах, 88,5% ОБ, КН – 3,06' +
        'Защитники : Андрей Марков, Алексей Емелин, Михаил Сергачев, «Монреаль»Статистика Маркова: 31 матч, 2+19, «+7»Статистика Емелина: 45 матчей, 2+5, «+6»Статистика Сергачева: 3 матча, 0+0, «+1»' +
        'Дмитрий Орлов, «Вашингтон» – 45 матчей, 2+19, «+17»' +
        'Никита Зайцев, «Торонто» – 44 матча, 1+16, «-5»' +
        'Нападающие : Евгений Малкин, «Питтсбург» – 46 матчей, 22+32, «+13' +
        'Статистика Овечкина: 46 матчей, 22+20, «+5» ' +
        'Статистика Кузнецова: 46 матчей, 6+27, «+14»' +
        'Владимир Тарасенко, «Сент-Луис» – 47 матчей, 20+26, «-11»' +
        'Никита Кучеров, Владислав Наместников, «Тампа-Бэй»' +
        'Статистика Кучерова: 41 матчей, 17+25, «+6»' +
        'Статистика Наместникова: 43 матча, 6+12, «-5»' +
        'Статистика Панарина: 49 матчей, 17+26, «+14»' +
        'Статистика Анисимова: 45 матчей, 18+15, «+13»' +
        'Александр Радулов, «Монреаль», 46 матчей, 10+22, «+4»',
  },
  {
    id: '7',
    title: 'Потрясающий гол Лукаса Подольски в прощальном матче за сборную',
    summary: '«Футбол – это, прежде всего, развлечение». Почему Лукас Подольски не вырос в топ-игрока',
    createdAt: new Date('2017-03-22T22:20:00+0300'),
    author: 'Станислав Рынкевич',
    image: 'http://cs8.pikabu.ru/post_img/2017/03/23/6/1490257064164491119.gif',
    content: 'После Евро-2016 Лукас Подольски объявил о завершении международной карьеры, но Немецкий футбольный союз не отпустил игрока без круга почета.' +
        ' Лукаса вызвали на прощальную игру против англичан и выдали капитанскую повязку. На предматчевой пресс-конференции Подольски сидел рядом с Йоахимом Лёвом и с удивлением смотрел на большой экран: в его честь запустили ролик-трибьют.' +
        ' «Эти 13 лет были крутыми. Я очень горжусь», – резюмировал футболист.На чемпионате мира 2006 года Лукас получил звание лучшего молодого игрока турнира. В списке номинированных числились такие ребята, как Криштиану Роналду и Лионель Месси, но награду забрал именно форвард сборной Германии. После того мундиаля прошло почти 11 лет: на календаре 2017-й, Лукас только что зажег в последнем матче за бундестим. Печаль не в том, что он покидает сборную, – а в том, что поставить Польди в один ряд с Роналду и Месси сейчас смешно.' +
        ' Единственное, в чем немец может быть круче аргентинца – это в играх за сборную.«Подольски – один из лучших футболистов, которых видела эта страна», – считает Лёв. Судя по цифрам, похоже на правду. 49 голов в 130 матчах – третий показатель в истории сборной Германии по забитым мячам и проведенным играм.' +
        ' Но несмотря на внушительную статистику, Лукас не воспринимается настолько же масштабной фигурой, насколько Руди Феллер или Карл-Хайнц Румменигге.«Моя семья переехала из Польши в Германию, когда мне было два года. Мы жили в однокомнатной квартире, я скитался по улицам. А теперь я чемпион мира, у которого в активе больше сотни матчей за сборную! Разве после этого я могу на что-то жаловаться? Я наслаждался каждой минутой, проведенной на поле», – рассказал Подольски в интервью 11 Freunde.Игрок, которому предрекали великое будущее, провел свои лучшие годы в скромном «Кёльне» и не жалеет об этом:' +
        ' «Мне очень нравится в этом городе. Здесь живут друзья и семья». Действия сборной Германии в матче с англичанами – типичный футбол «Кёльна» времен Подольски. Команда целенаправленно доставляла на него мяч, сам Лукас смело брал игру на себя, а болельщики все это дело боготворили. Прогресса в таких условиях добиться сложно, но Польди не горел желанием покидать зону комфорта.Смена поколений в немецком футболе официально завершена. В национальной команде не осталось ни одного футболиста, принимавшего участие в домашнем чемпионате мира-2006. Подольски ушел и напоследок напомнил:' +
        ' «Оставайтесь верными себе, старайтесь развиваться.' +
        ' И никогда не забывайте, что футбол – это, прежде всего, развлечение».',
  },
];

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('index.html');
});

app.get('/articles', (req, res) => {
  res.send(articles);
});

app.get('/article/:id', (req, res) => {
  res.send(articles.find(item => item.id === req.params.id));
});

app.post('/articles', (req, res) => {
  const article = {
    id: new Date(),
    title: req.body.title,
    summary: req.body.summary,
    createdAt: new Date(),
    author: req.body.author,
    image: req.body.image,
    content: req.body.content,
  };
  articles.push(article);
  res.sendStatus(200);
});

app.put('/article/:id', (req, res) => {
  const index = articles.findIndex(item => req.params.id === item.id);
  if (index === -1) {
    res.sendStatus(400);
  }
  if (req.body.title) {
    articles[index].title = req.body.title;
  }
  if (req.body.summary) {
    articles[index].summary = req.body.summary;
  }
  if (req.body.image) {
    articles[index].image = req.body.image;
  }
  if (req.body.content) {
    articles[index].content = req.body.content;
  }
  res.sendStatus(200);
});

app.delete('/article/:id', (req, res) => {
  const index = articles.findIndex(item => item.id === req.params.id);
  if (index === -1) {
    res.sendStatus(400);
  } else {
    articles.splice(index, 1);
    res.sendStatus(200);
  }
});


app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

