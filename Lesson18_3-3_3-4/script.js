'use strict';

//console.log ('hello world');

////const num = 5; // number +- (2^53 - 1)  (1-й тип)
////console.log(typeof num); // 'number'

////const floatNum = 5.2; // number +- (2^53 - 1)
////const typeofFloatNum =typeof floatNum;
////console.log(typeofFloatNum);

////const bigNum = BigInt(9007199254740992); // bigint | число произвольной длины (2-й тип) 
////console.log(typeof bigNum);
//console.log (bigNum);

////const strDoubleQuote = "String"; // строка в дойных кавычках (3-й тип)
////const strSingleQuote =  'String'; // строка в одинарных кавычках
////const name = 'Hello! I\'m Dmitriy';
////const quote = "He said: \"I wanna go home\"";
//const strItalicQuote = `""''String`;
////const strItalicQuote = `Hello, I have ${bigNum} apples`;
////const strWithApples = 'Hello, I have ' + bigNum + ' apples';
////console.log(typeof strWithApples);

//console.log(strWithApples);
////const isVisible = true; // boolean (4-й тип)
////const isHidden = false; // boolean
////const hasApples = true;
////console.log(typeof hasApples);

// Hello! I'm Dmitriy
// He said: "I wanna go home"

//----------------

////const someConstant = null; //null  (5-й тип)
////let someVariable; // undefined  (6-й тип)
//console.log(someConstant);
//console.log(someVariable);
////console.log(typeof someConstant);
////console.log(typeof someVariable);

// symbol (7-й тип) Используется в объектах и пока про него можно забыть.

////-------------------------------------------

// --------------Строковый тип преобразования
//const num = 5;
//const bool = false;

//const strFromNum = String(num);
//console.log(typeof str);
///const strFromNum = '' + num;
///console.log (typeof strFromNum);


//const strFromBool = String(bool);
//console.log(strFromBool);

//--------------- Числовой тип преобразования
//const str = '5.5';
//const bool = true;

//const numberFromStr = Number(str); // можно просто написать +str
//console.log(numberFromStr);
//console.log(typeof numberFromStr);

//const numberFromBool = Number(bool); // можно просто написать +bool
//console.log(numberFromBool);

//------------- Булевский тип преобразования
///const str = 'lkmlkm';
///const num = 5;

///const boolFromStr = Boolean(str); // дает значение true
///console.log(boolFromStr);

///const boolFromNum = Boolean(NaN); // дает значение true
///console.log(boolFromNum);

// falsey - значения ( только эти значения будут преобразовываться к false значениям, все остальные к true)
// 0, null, underfined, '', NaN

//----------------

// выражение
// операторы - символы, значения самих операторов + - / *
// операнды - числа, с которыми производится операция
// 5 + 10
// типы операторов: унарные и бинарные. Бинарные операторы включают 2 операнда, унарные - 1
// *, /, -, +  - бинарные, так как требуют два числа
// +sum - унарные, так как требуют одно число

//--------------------

//Математика
const result = 5 + 10 * 5 / 10 - 7;
console.log(result);

const division = 15 % 4 * result;
console.log(division);

const pow = 5 ** 2;
console.log(pow);

const res = 5 - '123123';
console.log(res);

//const divisionByZero = 1 / 0;
//console.log(divisionByZero);

const divisionByZero = BigInt(9.0071993e+15);
console.log(divisionByZero);

//Сокращенная арифметика
let n = 1;
n = n + 2;
n = n * 3;
n *= 3; // n = n * 3;
n += 3; // n = n + 3;
n /= 3; // n = n / 3;
n -= 3; // n = n - 3;
console.log(n);

n++; // инкремент (постфикс)
n--; // декремент (постфикс)

--n; // декремент (префикс)
++n; // инкремент (префикс)
console.log(n);








