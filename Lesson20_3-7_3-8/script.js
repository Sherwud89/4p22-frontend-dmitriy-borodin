'use strict';

////const error1 = '';
////const error2 = '';
////const error3 = '';

//const globalError = error1 + error2 + error3;

////if (!(error1 + error2 + error3)) {
////    console.log('ошибки нет');      // так это по условию, но Андрей не реконмдовал бы так делать
////} 

///if (!(error1 || error2 || error3)) {
///    console.log('ошибки нет');      // вот так красиво с точки зрения Андрея
///} 

///if (!(error1 && error2 && error3)) {
///    console.log('ошибки нет');           // через & можно проверить присутствие всех ошибок
///}

//--------Циклы ------
// Циклы - это повторяющиеся последовательность действий. Бывают 3 видов.

//console.log('Hello World',1);
//console.log('Hello World',2);
//console.log('Hello World',3);
//console.log('Hello World',4);
//console.log('Hello World',5);
//console.log('Hello World',6);
//console.log('Hello World',7);
//console.log('Hello World',8);
//console.log('Hello World',9);
//console.log('Hello World',10);

///let i = 0;

///for (let i = 0; i < 10; i++) {               // все счетчики начинаются с 0, а не с 1.
///    console.log('Hello World!', i + 1);   // тело цикла это то что находится в фигурных скобках
///}            // можно как угодно менять здесь условия. поставить 10 0 --

///console.log('after loop');

///for (let i = 0; i < 10; i++) { 
//    if (i === 5){
//       // break;     // break - обрыв цикла
//       continue;     
//    }
//    console.log('Hello World!', i + 1);
///}

// ----- Циклы с неизвестным числом повторений-----
// Циклы с предусловияем и циклы с постусловием

// Цикл с предусловием

//let isLoopContinues = true;
//let i = 0;

//while (isLoopContinues) {
//    i = Math.random();
//    console.log(i);

//    if (i > 0.5) {
//        isLoopContinues = false;
//    }
//}

// Цикл с постусловием

//do {
//    i = Math.random();
//    console.log(i);

//    if (i > 0.5) {
//        isLoopContinues = false;
//    } else {
//        isLoopContinues = true;
//    }
//} while (isLoopContinues);

// пример

//while (isLoopContinues) {
    i = Math.trunc(10 * Math.random() + 1)
    console.log(i);

    if (i === 8) {
        isLoopContinues = false;
    }
//}

// ---- Функция -----
// Функции созданы для того, чтобы какую-то часть кода выполнять несколько раз, но не в цикле несколько раз подряд, а тогда когда необходимо выполнять некоторые действия.

// Function Declaration
// function sayHelloToUser(firstName = '', lastName = '') {     // ='' - по умолчанию
//     someVariable = 39;
//     console.log(`Привет, ${firstName} ${lastName}`);

//     function innerFunction() {
//         comst someInnerFunctionVariable = '';
//         console.log(someVariable);
//     }

// }


console.log(someVariable);

sayHelloToUser('Иван', 'Петров');
sayHelloToUser('Elon', 'Musk');

// // Function Expression
// const sayHello2 = function () {
//     console.log('Hello World!');
// }

// // Function Expression (lambda - стрелочная функция)
// const sayHello3 = () => {
//     console.log('Hello World!');
// }

// // IIFE - Immediately Invoked Function Expression  //Немедленно вызванное функциональное выражение
// (function() {
//     console.log('Hello from IIFE');
// })();

// var someVariable = 'Hello';

// function sayHello(){
//     var someVariable = 'Hello';
// }

// if(true) {
//     var someVariable = 'Hello';
// }

// console.log(someVariable)

// Возвращаемое значение функции

function sayHello() {
    console.log('Hello World!');
}

function getSum(a,b) {
    return a + b;  // после return ничего не выполняется
}

const sum = getSum(4, 5) + getSum(5, 6);
console.log(sum);