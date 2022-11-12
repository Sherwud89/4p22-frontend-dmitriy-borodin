'use strict';

// setTimeout - выполняет callback после паузы (1 раз)
// setInterval - выполняет callback через промежуток времени

setTimeout(() => {
    console.log('Hello World! Timeout');
}, 1000);

setInterval(() => {
    console.log('Hello World! Interval');
}, 1000);

// 1000 милисекунд

function makeTimeoutFunction() {
    let i = 0;
    
    return () => {
        console.log(`Вызвано ${i} раз`)
    }
}