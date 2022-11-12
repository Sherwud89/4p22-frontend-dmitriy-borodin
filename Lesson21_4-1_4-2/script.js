'use strict';

// hoisting - это механизм (явление) в JavaScript, в котором переменные и объявления функций, передвигаются вверх своей области видимости перед тем, как код будет выполнен.

// После того как появляется ошибка код не выполняется.

// function sayHello() {
//     console.log ('Hello Fron Declaration');
// }

// const sayHello2 = function () {  // анонимная функция контекст не сохраняет
//     console.log('Hello From Expression');
// }

// const sayHello3 = () => {     // стрелочная функция сохраняет свой контекст
//     console.log ('Hello From Lambda Expression');
// }

// sayHello();
// sayHello2();
// sayHello3();

// пример показа hoistinga. Var не используем, так как он устарел 

// console.log(x);
// var x = '3';
// console.log(x);


// var x = '3';

// function printX() {
//     console.log(x);

//     var x = '5';
//     console.log(x);
// }

// printX();


// let x = '3'; // будет ошибка

// function printX() {
//     console.log(x);

//     let x = '5';
// }

// printX();


// const x = '3'; 

// function printX() {
//     console.log(x);

//     const x = '5';
// }

// printX();

//Closures
// Замыкание - способность функции запоминать переменные из контекста, где она была создана.

// let func;

// let i;

// for (let i = 0; i < 10; i++) {
//     if (i ===5) {
//         func = function () {
//             console.log(i);
//         }
//     }
// }

// func();


// const button = document.getElementById('button');

// const someVariable = 'Привет, мир';

// button.addEventListener ('click', function() { // функция call back
//     console.log(someVariable);
// });


// function foo() {
//     let i = 10;

//     return function () {
//         console.log(i);
//     }
// }

// // console.log(i);
// const func = foo();
// func();


// let func;

// if (true) {
//     let i = 10;

//     func = function(){
//         console.log(i);
//     }
// }

// func();

// Объект - сложная структура данных
// const person = {
//     firstName: 'Dmitriy',
//     lastName: 'Borodin',
//     body: {
//         age:50,
//         height: 185
//     }
// }

// console.log(person.body.age);


// const person2 = {
//     firstName: 'Dmitriy',
//     lastName: 'Borodin',
//     body: {
//         age:50,
//         height: 185
//     }
// }

// console.log(person2 === person); // так делать нельзя, максимум чего мы сможем добиться это равенство ссылок области памяти где хранится объект


// const person = {
//     firstName: 'Dmitriy',
//     lastName: 'Borodin',
//     body: {
//         age:50,
//         height: 185
//     }
// }

// const person2 = person;

// person2.firstName = 'Dmitriy';

// console.log(person.firstName);


// const person = {
//     firstName: 'Dmitriy',
//     lastName: 'Borodin',
//     // body: {
//     //     // age:50,
//     //     height: 185
//     // }
// }

// console.log(person.body?.age);


const person = null;

console.log (person?.body?.age);

if(person && person.body) {

} // Вот так работает опциональная цепочка или безопасный доступ
