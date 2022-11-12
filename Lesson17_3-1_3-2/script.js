'use strict';

//console.log (2+1);
//console.log ('Hello World 2!');
//console.log ('Hello World 3!');

//var someVariable = 'Hello World!' - сейчас не используется, так как устарел

//let someVariable = 'Hello World!'
//const someConstant ='Hello World!'

// - пишется комментарий

//console.log (someVariable);

//const a = 5;
//let b = 6;  //let -это переменная которая может менять значения

//console.log ((a + b) / a)

//b = 4;

//console.log (b)

const circle = document.querySelector('.circle');
let isMoving = false;

document.addEventListener ('mousemove',(event) => {
    if (!isMoving) {
        return;
    }

    circle.style.left =`${event.clientX}px`;
    circle.style.top = `${event.clientY}px`;
})

circle.addEventListener ('click', () => {
    isMoving = !isMoving;
})