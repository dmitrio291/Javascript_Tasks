'use strict';

let money = prompt('Ваш бюджет?'),
    name = prompt('Название вашего магазина?'),
    time = 19,

    mainList = {
    	budget: money,
    	shopName: name,
    	shopGoods: [],
    	employers: {},
    	open: false
    }

for(let i = 0; i < 5; i++) {

    let answer = prompt('Какой тип товаров будем продавать?');

    if((typeof(answer)) === 'string' && (typeof(answer)) === null && answer != '' && answer.length < 50) {
        console.log('Все верно!');
        mainList.shopGoods[i] = answer;
    } else {
        mainList.shopGoods[i] = answer;  
    }
}

if (time < 0) {
    console.log('Такого просто не может быть')
} else if(time > 8 && time < 20) {
    console.log('Время работать!');
} else if (time < 24) {
    console.log('Уже слишком поздно!');
} else {
    console.log('В сутках только 24 часа!');
};

alert(mainList.budget / 30);

console.log(mainList);


