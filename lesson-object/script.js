console.log ('Объекты');

const userArray = [{
    id: 148,
    name: 'Артем',
    age: 19,
    role: 'user',
 },{
    id: 354,
    name: 'Борис',
    age: 46,
    role: 'premium-user',
},{
    id: 268,
    name: 'Михаил',
    age: 32,
    role: 'admin',
},{
    id: 184,
    name: 'Олег',
    age: 28,
    role: 'user',
},{
    id: 316,
    name: 'Тимофей',
    age: 37,
    role: 'premium-user',
},{
    id: 248,
    name: 'Николай',
    age: 23,
    role: 'user',
}];

const userObj = userArray.reduce ((obj, user) => { 
        console.log (`\t${user.id}\t${user.name}|\t${user.role}`);
        obj[user.id] = user;
        obj.idxs.push(user.id);
        return obj; // ! многострочная ! обязателен return, иначе на втором шаге массива idxs не будет, ну и накопления свойств не будет
        }, {idxs: []});

console.log (userObj);

//-------------------------------------------------------------------------------
function addUserObj (id, name, age, role) {
    if (id in userObj) {
        console.log (`Пользователь с id = ${id} уже есть!`);
    } else {
        userObj[id] = {id, name, age, role};
        userObj.idxs.push(id);
    }
}

function changeUserObj (id, key, value) {
    if (key === 'id') {
        console.log ('Нельзя менять идентификатор!');
    } else {
        userObj[id][key] = value;
    }
}

function deleteUserObj (pid) {
    if (pid in userObj) {
        delete userObj[pid];
        //userObj.idxs = userObj.idxs.filter ((value) => {value !== pid});
        userObj.idxs = userObj.idxs.filter ((value) => value !== pid);
    }
}

addUserObj (316, 'Яков', 41, 'premium-user'); // id уже есть
addUserObj (319, 'Яков', 41, 'premium-user'); 
console.log (userObj);
changeUserObj (184, 'id', 187);
changeUserObj (184, 'role', 'premium-user');
console.log (userObj);
deleteUserObj (354);
console.log (userObj);