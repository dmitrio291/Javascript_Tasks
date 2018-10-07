/*jshint esversion: 6 */
/* Получить кнопку "Открыть магазин" через id. Получить все поля в левом меню через классы. Получить поля категории товаров через класс. Получить все 3 кнопки через Tag. Получить поля ввода товаров, времени и расчета бюджета через querySelector. Получить поля имен сотрудников через querySelectorAll */

//  Переменные

let budget,
	shopName,
	time,
	price = 1000;

// Получаем элементы страницы

let openBtn = document.getElementById('open-btn'),
	// Левое меню
	name = document.getElementsByClassName('name')[0],
	nameValue = document.getElementsByClassName('name-value')[0],
	budgetElement = document.getElementsByClassName('budget')[0],
	budgetElementValue = document.getElementsByClassName('budget-value')[0],
	goods = document.getElementsByClassName('goods')[0],
	goodsValue = document.getElementsByClassName('goods-value')[0],
	items = document.getElementsByClassName('items')[0],
	itemsValue = document.getElementsByClassName('items-value')[0],
	employers = document.getElementsByClassName('employers')[0],
	employersValue = document.getElementsByClassName('employers-value')[0],
	discount = document.getElementsByClassName('discount')[0],
	discountValue = document.getElementsByClassName('discount-value')[0],
	isOpen = document.getElementsByClassName('isopen')[0],
	isOpenValue = document.getElementsByClassName('isopen-value')[0],



	/*leftMenu = document.getElementsByClassName( '.name-value, .budget-value, .goods-value, .items-value, .employers-value, .discount-value, .isopen-value ' ),*/
	// Товары
	chooseGoods = document.getElementsByClassName('.goods-item'),

	// Кнопки 
	/*rightButtons = document.querySelectorAll( '.main-functions button' ),*/

	countBudgetButton = document.getElementsByTagName('button')[1],
	hireEmployerButton = document.getElementsByTagName('button')[2],
	discountButton = document.getElementsByTagName('button')[3],

	// Поля

	chooseItem = document.querySelector('.choose-item'),
	timeValue = document.querySelector('.time-value'),
	countBudgetValue = document.querySelector('.count-budget-value'),

	/*rightMenu = document.querySelectorAll( '.choose-item, .time-value, .count-budget-value ' ),*/

	// querySelectorAll
	employersName = document.querySelectorAll('.main-functions .hire-employers-item');


// Функции

// Функция для запрашивания у пользователя Бюджета (budget) 
// и Названия магазина (shopName) и проверка правильности ввода

function start() {

	budget = prompt("Ваш бюджет?", '');

	while (isNaN(budget) || budget === "" || budget === null) {
		budget = prompt("Ваш бюджет?", '');
	}

	shopName = prompt("Название вашего магазина?", '').toUpperCase();
	time = 19;
}


// Вызов функции для запрашивания у пользователя Бюджета (budget) 
// и Названия магазина (shopName)

start();

// Объект mainList 

let mainList = {

	// Свойства объекта

	budget: budget,
	shopName: shopName,
	open: false,
	discount: true,
	shopGoods: [],
	shopItems: [],
	employers: {
		1: "Имя"
	},

	// Методы объекта

	// Функция записи в массив Типа товаров (shopGoods) и проверка правильности ввода

	chooseGoods: function chooseGoods() {
		for (let i = 0; i < 5; i++) {
			let a = prompt("Какой тип товаров будем продавать?", '');

			if ((typeof (a)) === 'string' && (typeof (a)) !== null && a !== '' && a.length < 50) {
				console.log('Все верно! ');
				mainList.shopGoods[i] = a;
			} else {
				i = i - 1;
			}
		}
	},

	// Функция проверки времени работы магазина (time), время передаем при  
	// вызове функции

	workTime: function workTime(time) {
		if (time < 0) {
			console.log('Такого просто не может быть!');
		} else if (time > 0 && time < 20) {
			console.log('Время работать!');
			mainList.open = true;
		} else if (time < 24) {
			console.log('Уже слишком поздно!');
		} else {
			console.log('В сутках только 24 часа!');
		}
	},

	// Функция расчета дневного бюджета (mainList.budget)

	dailyBudget: function dailyBudget() {
		alert(mainList.budget / 30);
	},

	// Функция дисконтной системы (mainList.discount)

	discountSystem: function discountSystem() {
		if (mainList.discount) {
			price *= 0.8;
			alert('Цена за товар: ' + price);
		}
	},

	// Функция найма сотрудников (mainList.employers)

	employersHire: function employersHire() {
		for (let i = 0; i < 4; i++) {

			let employeeName = prompt("Введите имя сотрудника", '');

			if ((typeof (employeeName)) === 'string' && (typeof (employeeName)) !== null && employeeName !== '' && employeeName.length < 60) {
				mainList.employers[i + 1] = employeeName;
				console.log('Сотрудник добавлен! ');
			} else {
				i = i - 1;
				console.log('Ошибка при вводе имени сотрудника!');
			}
		}
	},

	// Функция выбора товаров

	chooseShopItems: function chooseShopItems() {
		let items = prompt("Перечислите через запятую ваши товары", '');
		let moreItems = prompt("Подождите, еще ", '');

		// Проверка на правильность ввода для items

		while ((typeof (items)) !== 'string' || (typeof (items)) === null || items === '' || items.length > 250) {
			items = prompt("Перечислите через запятую ваши товары", '');
		}

		// Записываем элементы строки в массив через ","

		mainList.shopItems = items.split(",");

		// Проверка на правильность ввода для moreItems

		while ((typeof (moreItems)) !== 'string' || (typeof (moreItems)) === null || moreItems === '' || moreItems.length > 50) {
			moreItems = prompt("Подождите, еще ", '');
		}

		// Добавляем в конец массива значение переменной moreItems

		mainList.shopItems.push(moreItems);

		// Сортируем массив по алфавиту

		mainList.shopItems.sort();
	},

	// Функция показа товаров магазана

	youCanBuy: function youCanBuy() {
		console.log('У нас вы можете купить:');
		mainList.shopItems.forEach(function (item, i) {
			console.log(i + 1 + ": " + item);
		});
	},

	// Функция показа "Наш магазин включает в себя"

	ourShopIncludes: function ourShopIncludes() {
		console.log('Наш магазин включает в себя:');

		for (let key in mainList) {
			/*if ( mainList[key] == ["shopName"] || mainList[key] === ["open"] ||
				mainList[key] === ["shopGoods"] || mainList[key] === ["shopItems"]
				|| mainList[key] === ["employers"] ) {*/
			console.log('Свойство: ' + key);
			/*}*/

		}
	}

};

// Вывод

//mainList.chooseShopItems();

console.log(mainList);

//mainList.youCanBuy();

mainList.ourShopIncludes();