/* 1. Восстановить порядок в меню, добавить пятый пункт. Заменить картинку заднего фона на другую из папки img. Поменять заголовок, добавить слово "подлинную". Удалить рекламу со страницы. Спросить у пользователя отношение к технике apple и записать ответ в поле "prompt" */


// Доступ к элементам на странице

// Записываем в переменную элементы с классом menu-item
let menuItems = document.getElementsByClassName('menu-item'),
		// Записываем в переменную новосозданный пятый пункт меню
		newItem = document.createElement('li'),
		// Записываем в переменную заголовок
		oldTitle = document.getElementById('title'),
		// Записываес в переменную новый div
		newTitle = document.createElement('div'),
		// Записываем в переменную рекламу
		adv = document.querySelector('.adv'),
		// Записываем в переменную div prompt
		promptDiv = document.getElementById('prompt');


// Меняем местами пункты меню

// Обращаемся ко второму пункту HTML-коллекции. Вставляем третий элемент перед 
// вторым и удаляем его с HTML-коллекци используя обращение к родителю (parentNode)

menuItems[1].parentNode.insertBefore(menuItems[2].parentNode.removeChild(menuItems[2]), menuItems[1]);

// Добавление класса этого пункта

newItem.classList.add("menu-item");

// Объявляем переменную с текстом

newItemTextNav = document.createTextNode('Пятый пункт');

// Добавляем текст для пятого пунка

newItem.appendChild(newItemTextNav);

// Добавляем пятый пункт меню на страницe

menuItems[0].parentNode.appendChild(newItem);

console.log(menuItems);


// Меняем картинку заднего фона

document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';
document.body.style.backgroundSize = 'cover';


// Меняем заголовок

// Объявляем переменную с текстом

newTitleText = document.createTextNode('Мы продаем только подлинную технику Apple');

// Добавляем текст для заголовка

newTitle.appendChild(newTitleText);

// Добавляем класс новому заголовку

newTitle.classList.add("title");

// Заменить один элемент другим без сохранения первого

oldTitle.parentNode.replaceChild(newTitle, oldTitle);


// Удалаяем рекламу со страницы

newTitle.parentNode.removeChild(adv);

// Записываем в переменную ответ пользователя

let userAttitudes = prompt("Ваше отношение к технике Apple?", '');

// Проверяем на правильность ввода

while((typeof(userAttitudes)) !== 'string' || (typeof(userAttitudes)) === null ||
	userAttitudes === '' || userAttitudes.length > 250) {
	userAttitudes = prompt("Ваше отношение к технике Apple?", '');
}

// Создаем новый текстовый узел с текстом пользователя

newPromptText = document.createTextNode(userAttitudes);

// Добавляем текстовый узел к нашему prompt

promptDiv.appendChild(newPromptText);