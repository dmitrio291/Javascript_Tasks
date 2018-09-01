'use strict';

var budget = prompt('Ваш бюджет?'),
    shopName = prompt('Название вашего магазина?'),
    mainList = {
    	budget: budget,
    	shopName: shopName,
    	shopGoods: [],
    	employers: [
    		{name: 'Станислав', age: 31, gender: 'male'},
    		{name: 'Евгений', age: 34, gender: 'male'},
    		{name: 'Марина', age: 29, gender: 'female'}
    	],
    	open: true
    }

for(var i = 0; i < 3; i++) {
	mainList.shopGoods[i] = prompt('Какой тип товаров будем продавать?');
}    

// alert(mainList.shopGoods);

alert(mainList.budget / 30);


