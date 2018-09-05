'use strict';

let money = prompt('Ваш бюджет?'),
    shopName = prompt('Название вашего магазина?'),

    mainList = {
    	budget: money,
    	shopName: shopName,
    	shopGoods: [],
    	employers: {},
    	open: false
    }

for(let i = 0; i < 3; i++) {
	mainList.shopGoods[i] = prompt('Какой тип товаров будем продавать?');
}    

alert(mainList.budget / 30);

console.log(mainList);


