'use strict';

var str = 'урок-3-был слишком легким';
str = str.charAt(0).toUpperCase() + str.substring(1);
str = str.split('-').join(' ');
console.log(str);

str = str.replace('легким', 'легком');
alert(str);



