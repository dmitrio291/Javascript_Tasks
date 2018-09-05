'use strict';

// let x = 5; alert( x++ ); 
// console.log(x);
/* Какое будет выведено значение: let x = 5; alert( x++ ); ? 
Ответ: 5
Потому что сначала выведет значение переменной, а потом она будет инкрементирована.*/

// console.log([ ] + false - null + true);
/* Чему равно такое выражение: [ ] + false - null + true ? 
Ответ: NaN
Ошибка в математических операндах. */

// let y = 1; let x = y = 2; alert(x);
/* Что выведет этот код: let y = 1; let x = y = 2; alert(x); ? 
Ответ: 2
Операторы присваивания право-асоциативны.
*/  

// console.log([ ] + 1 + 2);
/* Чему равна сумма [ ] + 1 + 2? 
Ответ: Строке “12”
[ ] – пустая строка, и поэтому сравнивая её с остальными операндами, они будут
становиться строкой */

// alert( "1"[0] );
/* Что выведет этот код: alert( "1"[0] )? 
Ответ: Диалоговое окно alert со значением 1
Потому что обращаемся к первому элементу строки, то есть к “1”. */ 

// console.log(2 && 1 && null && 0 && undefined);
/* Чему равно 2 && 1 && null && 0 && undefined ? 
Ответ: null
Отсутствие объекта. */ 

/* Есть ли разница между выражениями? !!( a && b ) и (a && b)?
Ответ: Разница в типах данных
!!( a && b ) всегда возвращает значение логического типа.*/

// alert( null || 2 && 3 || 4 );
/* Что выведет этот код: alert( null || 2 && 3 || 4 ); ? 
Ответ: 3
Сначала, по таблице приоритетов операторов, сравниваем 2 && 3, вернется 3, 
потому что при сравнении 2 && 3 операторы истинные и возвращается последний
оператор. Потом null || 3, null будет приравниваться к логическому типу и тогда
false || 3, вернется 3. 3 || 4, 3 это true и поэтому сразу возвращаеться 3. */

// a = [1, 2, 3]; b = [1, 2, 3]; 
/* Правда ли что a == b ?
Ответ: Неправда
Сравниваем два разных объекта, т.к. массивы – это объекты. */

// alert( +"Infinity" );
/* Что выведет этот код: alert( +"Infinity" ); ?
Ответ: Диалоговое окно alert со значением Infinity числового типа
Унарный плюс переводит строку в number, а Infinity – это тип number. */

/* Верно ли сравнение: "ёжик" > "яблоко"? 
Ответ: Верно
Потому что сравниваются коды первых символов строк по Юникодовской таблице.
В ней “ё” = 1105, а “я” = 1103.*/

// console.log(0 || "" || 2 || undefined || true || falsе);
/* Чему равно 0 || "" || 2 || undefined || true || falsе ? 
Ответ: 2
Потому что при 0 || "" возвращeться false. При 2 || true возвращаеться 2.*/


