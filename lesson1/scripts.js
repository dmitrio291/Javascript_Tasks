'use strict';

//  Переменные
let money,
    name,
    time,
    price;

// Функции

// Функция для запрашивания у пользователя Бюджета (budget) 
// и Названия магазина (shopName) и проверка правильности ввода
function start() {
   money = prompt('Ваш бюджет?');

   while(isNaN(money) || money === '' || money === null) {
       money = prompt('Ваш бюджет?');
   }

   name = prompt('Название вашего магазина?').toUpperCase();
   time = 21;
}

// start();

let mainList = {
    budget: money,
    shopName: name,
    shopGoods: [],
    employers: {},
    open: false,
    discount: false
}    

// Функция записи в массив Типа товаров (shopGoods) и проверка правильности ввода
function chooseGoods() {
    for(let i = 0; i < 5; i++) {

        let answer = prompt('Какой тип товаров будем продавать?');

        if((typeof(answer)) === 'string' && (typeof(answer)) !== null && answer !== '' && answer.length < 50) {
            console.log('Все верно!');
            mainList.shopGoods[i] = answer;
        } else {
            i = i - 1; 
        }
    }
}

// chooseGoods();

// Функция проверки времени работы магазина (time), время передаем при вызове 
function workTime(time) {
    if (time < 0) {
        console.log('Такого просто не может быть')
    } else if(time > 8 && time < 20) {
        console.log('Время работать!');
    } else if (time < 24) {
        console.log('Уже слишком поздно!');
    } else {
        console.log('В сутках только 24 часа!');
    }
}

workTime(18);

// Функция расчета дневного бюджета (mainList.budget)
function dailyBudget() {
    alert(mainList.budget / 30);
}

// Функция дисконтной системы (mainList.discount)
function discountSystem() {
    if(mainList.discount) {
        price *= 0.8;
        alert('Цена за товар: ' + price);
    }
}

// Функция найма сотрудников (mainList.employers)
function employersHire() {
    for(let i = 0; i < 4; i++) {

        let employerName = prompt("Введите имя сотрудника");

        if((typeof(employerName)) === 'string' && (typeof(employerName)) !== null && employerName !== '' && employerName.length < 60) {
            mainList.employers[i + 1] = employerName;
            console.log('Сотрудник добавлен');
        } else {
            i = i - 1;
            console.log('Ошибка при вводе имени сотрудника!');
        }
    }
}

// employersHire();

// alert('Ежедневный бюджет ' + mainList.budget / 30);

console.log(mainList);










//Цикл While

/*while (mainList.shopGoods.length < 5) {
    let a = prompt("Какой тип товаров будем продавать?");
    
    if (( typeof(a)) === 'string' && ( typeof(a)) !== null && a !== '' && a.length < 50 ) {
        console.log('Все верно! ');
        mainList.shopGoods[mainList.shopGoods.length] = a;
    } else {
        alert('Неправильнно введенный тип товаров!!!');
        console.log('Неверно!!!');
    }
}*/

//Цикл do While

/*do {
    let a = prompt("Какой тип товаров будем продавать?");
    
    if (( typeof(a)) === 'string' && ( typeof(a)) !== null && a !== '' && a.length < 50 ) {
        console.log('Все верно! ');
        mainList.shopGoods[mainList.shopGoods.length] = a;
    } else {
        alert('Неправильнно введенный тип товаров!!!');
        console.log('Неверно!!!');
    }
} 
while (mainList.shopGoods.length < 5);*/


