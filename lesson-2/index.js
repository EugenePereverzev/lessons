// Условие задачи 
/*
let y;
const x = '' + prompt('Введите число',-1);

if (x < 0 && x > -2) {
    y = 0;
} else {
    y = 2;
}

if (y === 0) {
    alert('Делить на ноль нельзя!')
}
*/

// Мое решение 1
//((x=prompt('Введите число'))<0)?(x>-2)?alert('Делить на ноль нельзя!'):0:0;
// Мое решение 2
(x=prompt('Введите число'))<0&&x>-2?alert('Делить на ноль нельзя!'):0;

// Решение только для целых чисел
~x?2:alert('Делить на ноль нельзя!')