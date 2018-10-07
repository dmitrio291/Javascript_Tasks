
/* 1. Написать функцию, преобразующую число в объект

* Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
* Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
* Если число превышает 999, необходимо выдать соответствующее сообщение с помощью `console.log` и вернуть пустой объект. */

function addNumber(n) {
	if(0 <= n && n <= 999) {
		var chislo = {
			единицы: n % 10,
			десятки: (n % 100 - n % 10) / 10,
			сотни: Math.floor(n / 100)
		};
		return chislo
	} else {
		console.log('Число вне диапазона');
		return null
	}
}
console.log(addNumber(245));

// 2-ой вариант
var number = {
	units: null,
	dozens: null,
	hundreds: null,

	parse: function(n) {
		var data = ("" + n).split("").reverse().join("");
		if(data.length < 1 || data.length > 3) {
			var err = 'Число должно быть в диапазоне от 0 до 999';
			// log(err);
			console.log(err);
			return this;
		} else {
			switch(data.length) {
				case 3:
					this.hundreds = data[2];
				case 2:
					this.dozens = data[1];
				case 1:
					this.units = data[0];		
			}
			return this;
		}
	},

	toString: function() {
		return 'units:' + this.units + ', dozens: ' + this.dozens + ', hundreds: ' + this.hundreds;
	}
}

// 2. Добавить функционал в игру: * Выписать сделанные пользователем ходы в массив и вывести их по окончании игры
var game = {
	// count: 0,
	gameIsRunning: true,
	steps: [], 
	showProgress: function(array) {
		for(var i = 0, len = array.length; i < len; i++) {
			console.log('Ход №' + (i + 1) + ': ' + array[i]);
		}
		return this.steps;
	},
	random: function(min, max) {
		return Math.round(min + Math.random() * (max - min));
	},
	checkAnswer: function(random) {
		var answer = +prompt('Укажите число (-1 - закончить игру)');
		this.steps.push(answer);

		while(this.gameIsRunning) {
			if (answer === -1) {
				this.gameIsRunning = false;
			} else if(answer == 0 && isNaN(answer)) {
				alert('Вы не ввели число!\nВыход.');
				this.gameIsRunning = false;
			} else if(answer == random) {
				alert('Поздравляем, вы угадали число!');
				this.gameIsRunning = false;
			} else {
				this.count++;
				if(answer < random) {
					alert('Мало');
				} else if(answer > random) {
					alert('Много');
				}
				answer = +prompt('Укажите число (-1 - закончить игру)\nПопыток:' + this.steps.length + 1);
				this.steps.push(answer);
			}
		}
		this.showProgress(this.steps);
		console.log('Компьютер загдал число: ' + random);
	}
}

game.checkAnswer(game.random(1, 100));