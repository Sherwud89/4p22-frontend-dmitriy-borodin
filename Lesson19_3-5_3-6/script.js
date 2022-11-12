'use strict';

//const str = 'строка'.toUpperCase();
//const str2 = 'СтРока'.toLocaleLowerCase();

//console.log('Строка'.toUpperCase());

///console.log('Строка'.includes('Стр'));

///console.log('Строка'.startsWith('рок'));
///console.log('Строка'.endssWith('ок'));

////const str = 'строка'  // строка не изменяемся константа
////const strUpper = str.toUpperCase();
////console.log(str.toLowerCase());
////console.log(str);
////console.log(strUpper);

/////console.log('А роза упала на лапу Азора'.replace('А', 'а'))
/////console.log('А роза упала на лапу Азора'.replaceAll('А', 'а'))

//////const str = '     строка с пробелами по краям    ';
//////console.log(str.trim())

///////const str = 'Привет!';
///////console.log(str[0]); // в зависимости от цифры в квадратных скобках показывается буква по порядку.
///////console.log(str.length); // можем посмотреть длину строки
///////console.log(str.substring(2,4)) // срезы строк

///const startsWith = '  Строка   '.trim().toLowerCase().startsWith('стр');
// const str = `Строка начинается с "стр": ${startsWith}`;
///const str = 'Строка начинается с "стр": '.concat(startsWith);

///console.log(startsWith);

// --------------Логические операторы---------
//  || - ИЛИ
//  && - И
//  !  - НЕ

///const a = null;
///const b = 'Строка';
///const c = 0;

///const resultOr = a || b || c;
///console.log(resultOr);

///const resultAnd = a && b && c;
///console.log(resultAnd);

//---------------Операторы сравнения----------
//const num1 = 5;
//const num2 = '5';
//const num3 = 6;

//const result = num1 == num2;
//console.log(result);

///const result = num1 === num2;
///console.log(result);

//const result = num1 != num2;
//console.log(result);

//строгое !==, не строгое !=

//console.log(num1 > num2);
//console.log(num1 < num2);
//console.log(num1 <= num2);
//console.log(num1 >= num2);

///const num = 5;
///const num2 = 10;

///if (num >= 5 && num2 >= 10) {
///    console.log ('Число больше или равно 5')
///} else if (num >= 10){
///}

////const age = 39;
////const firstName = 'Pawel';
////const lastname = 'Macivoda';

////if (age > 18 && age < 40) {
////    console.log('Ваш возраст от 18 до 40');
////}

////if (firstName === 'Pawel' || firstName === 'Pavel' && age > 18) {
////    console.log('Условие выполнилось');
////}

/////const someVariable = 'ЗНАЧЕНИЕ 1';

/////switch (someVariable) {
/////    case 'Значение 1': console,log('1'); break;
/////    case 'Значение 1': console,log('2'); break;
/////    case 'Значение 1': console,log('3'); break;
/////    default: console.log('default');  //всегда лучше использовать switch, чем if и else
    // default применяется тогда когда ничего из значений не совпало
/////}

const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('[password');
const button = document.getElementById('submit')

loginInput.addEventListener('input',(event) => {
    console.log(event.target.value);
})

passwordInput.addEventListener('input',(event) => {
    console.log(event.target.value);
})

button.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(loginInput.value);
    console.log(passwordInput.value);

    if (loginInput.value === passwordInput.value) {
        console.log('значения совпадают');
    } else {
        console.log('значения не совпадают');
    }
})




