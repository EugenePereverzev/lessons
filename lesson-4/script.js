
/*
const media = [{},{}];
media
.filter({type} => type ==='tvshow')
.sort((a, b) => {a.year - b.year || ()=> {} || a.episodes.episodenumber - a.episodes.episodenumber});
*/

const users = ['Артём','Борис','Вова'];

console.log ('users', users);

const fruits = [];

fruits[2] = 'Яблоко';
fruits[5] = 'Банан';

console.log ('fruits', fruits);

const userObjs = [{
    name : 'Артём',
    age : 23,
},{
    name : 'Борис',
    age : 18,
},{
    name : 'Вова',
    age : 31,  
}];

console.log ('userObjs', userObjs);

let {name: vName, age: vAge} = userObjs[1];

console.log ('Name:', vName, 'Age:', vAge);

const media = [{
    name: 'Титаник',
    type: 'movie',
    year:'1997',
},{
    name: 'Приключения Шерлока Холмса и доктора Ватсона',
    type: 'tvshow',
    year:'1979',
    episodes: [{
        name: 'Король шантажа',
        episodeNumber: 3,
    },{
        name: 'Знакомство',
        episodeNumber: 1,
    },{
        name: 'Охота на тигра',
        episodeNumber: 5,
    },{
        name: 'Смертельная схватка',
        episodeNumber: 4,
    },{
        name: 'Кровавая надпись',
        episodeNumber: 2,
    }],
},{
    name: 'Солярис',
    type: 'movie',
    year:'1972',
},{
    name: 'Семнадцать мгновений весны',
    type: 'tvshow',
    year:'1971',
    episodes: [{
        name: 'Серия 12',
        episodeNumber: 12,
    },{
        name: 'Серия 1',
        episodeNumber: 1,
    },{
        name: 'Серия 10',
        episodeNumber: 10,
    },{
        name: 'Серия 11',
        episodeNumber: 11,
    },{
        name: 'Серия 2',
        episodeNumber: 2,
    }],
}];

let episodes = media
    .filter (({type}) => type === 'tvshow')
    .sort (({year: y1}, {year: y2}) => y1 - y2)
    .map (({episodes: ep}) => ep.sort (({episodeNumber: en1}, {episodeNumber: en2}) => en1 - en2).map (({name}) => name))
    .flat ()
    ;

console.log (episodes);

// Домашнее задание
function myReduce (arr, func) {
   // return arr.map ((value, index, array) => func (value, index, array));
   return 'impossible';
};

function myMap (arr, func) {
    return arr.reduce ((a, value, index, array) => a.concat (func (value, index, array)), []);
};
// Функция для тестирования
function some (value, index, array) {
    return `${value.name}: ${value.age}`;
};

console.log ('myMap', myMap (userObjs, some));
console.log ('.map',  userObjs.map (some));