'use strict'
const personObj = {
    name: 'John',
    surname: 'Doe',
    sex: 'male',

    getFullName: function (pref) {return `obj func: ${pref||''} ${this.name||'anonymous'} ${this.surname||'--'}`},
    getFullArrow: () => (pref) => `obj arrow: ${pref||''} ${this.name||'anonymous'} ${this.surname||'--'}`,
    getSonName: function (pref) {return `obj func son: ${pref||''} ${this.son?.name||'anonymous'} ${this.son?.surname||'--'}`},
};

const personObj2 = {
    name: 'Amanda',
    surname: 'Cruise',
    age: 38, 
    son: personObj, 
};

function declFullName (pref) {return 'decl func: ' + (pref||'') + ' ' + (this.name||'anonymous') + ' ' + (this.surname||'--')}; //{return `decl func: ${pref||''} ${this.name||'anonymous'} ${this.surname||'--'}`}; //
const expFullName = function (pref) {return `exp func: ${pref||''} ${this.name||'anonymous'} ${this.surname||'--'}`}; //{return 'exp func: ' + pref||'' + this.name||'anonymous' + this.surname||'--'}

console.log (personObj.getFullName('Msr.'));
console.log (personObj.getFullArrow()('Msr.'));
console.log (personObj.getSonName('Msr.'));

const { getFullName : getFN, getFullArrow: getFNA, getSonName: getSN} = personObj;

//console.log (getFN('11| Msr.')); // включен strict
//console.log (getSN('12| Msr.'));   // включен strict
console.log ('---------------------------------------------');
for (let key in personObj2) {
    console.log (`${key}: `, personObj2[key]);
}
console.log ('---------------------------------------------');

console.log (getSN.call(personObj2, 'Dear Son'));
console.log (getFNA.call(personObj2)('Dear'));

console.log (declFullName.call(personObj, 'Wow'));
console.log (expFullName.call(personObj, 'Wow'));
console.log (declFullName.call(personObj2, 'Wow2'));
console.log (expFullName.call(personObj2, 'Wow2'));


// объединяем объекты в один новый
const joinObj = {...personObj, ...personObj2};
console.log ('joinObj', joinObj);

// разделяем в новом объекте
const {getFullname: f1, getFullnameArrow: f2, ...splitObj} = personObj;
console.log ('splitObj', splitObj);

// домашняя работа
function myBind (func, obj, arg) {
    return func.apply(obj, arg);
}
console.log ('---------------------------------------------');

console.log (myBind(getFN,joinObj,['Join:']));
console.log (myBind(getFN,splitObj,['Split:']));