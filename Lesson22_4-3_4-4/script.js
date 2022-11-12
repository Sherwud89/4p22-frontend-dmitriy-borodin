'use strict';

// const person = {
//     firstName: 'Dmitriy',
//     lastName: 'Borodin'
// }

// const employee = {
//     lastName: 'BorodinEmployee',
//     id: 2344234,
//     personalInfo: {
//         passportNumber: 123123123,
//         telNumber: 89111111111,
//         taxNumber: '123123123123',
//     }
// }

// const person2 = Object.assign({}, person, employee);

// // spread
// const person3 = { ...person, ...employee, personalInfo: { ...employee.personalInfo} }; 

// person3.personalInfo.passportNumber = 0;

// //Object.assign(person2, person);

// // console.log(person2 === person)

// // person2.firstName = 'Dmitrii';

// console.log(person3);
// console.log(person2);


// const employee = {
//     lastName: 'BorodinEmployee',
//     id: 2344234,
//     personalInfo: {
//         passportNumber: 123123123,
//         telNumber: 89111111111,
//         taxNumber: '123123123123',
//     }
// }

// // json - LavaScript Object Notation
// const stringJson = JSON.stringify(employee);
// console.log(stringJson);

// const employee2 = JSON.parse(stringJson);
// console.log(employee2);


// employee2.personalInfo.passportNumber = 0;

// console.log(employee.personalInfo.passportNumber);
// console.log(employee2.personalInfo.passportNumber);

//----------Массивы ---------------------- 
// const arr = []
// const arr2 = ['яблоко','банан','персик'];

// const objectList = [
//     {
//         firstName: 'Petr',
//         lastName: 'Cech',
//         birthDate: '20.05.1982'
//     },
//     {
//         firstName: 'Branislav',
//         lastName: 'Ivanovic'
//     },
//     {
//         firstName: 'John',
//         lastName: 'Terry'
//     },
//     {
//         firstName: 'Ricardo',
//         lastName: 'Carvalho'
//     }
// ];

// for (let i = 0; i < objectList.lenght; i++) {
//     console.log(objectList[i].firstName);
// }


// const element = objectList[3];
// const length = objectList[objectList.lenght];

// console.log(element2);


// const arr = []
// const arr2 = ['яблоко','банан','персик'];

// const objectList = [
//     {
//         firstName: 'Petr',
//         lastName: 'Cech',
//         birthDate: '20.05.1982'
//     },
//     {
//         firstName: 'Branislav',
//         lastName: 'Ivanovic'
//     },
//     {
//         firstName: 'John',
//         lastName: 'Terry'
//     },
//     {
//         firstName: 'Ricardo',
//         lastName: 'Carvalho'
//     }
// ];

// for (let i = 0; i < objectList.lenght; i++) {
//     console.log(objectList[i].firstName);
// }

// const numberList = [1, 2, 3, 4, '5', 6, 7, false, 9, 10];
// let sum = 0;
// for (let i = 0; i < numberList.length; i++) {
//     sum += numberList[i];
// }

// console.log(sum);


// const arr = []
// const arr2 = ['яблоко','банан','персик'];

// const objectList = [
//     {
//         firstName: 'Petr',
//         lastName: 'Cech',
//         birthDate: '20.05.1982'
//     },
//     {
//         firstName: 'Branislav',
//         lastName: 'Ivanovic'
//     },
//     {
//         firstName: 'John',
//         lastName: 'Terry'
//     },
//     {
//         firstName: 'Ricardo',
//         lastName: 'Carvalho'
//     }
// ];

// for (let i = 0; i < objectList.lenght; i++) {
//     console.log(objectList[i].firstName);
// }

// objectList.forEach((item, index, array) => {
//     console.log(array);
//     console.log(`${index + 1}. ${item.firstName}`);
// });


const arr = []
const arr2 = ['яблоко','банан','персик'];

const objectList = [
    {
        firstName: 'Petr',
        lastName: 'Cech',
        birthDate: '20.05.1982'
    },
    {
        firstName: 'Branislav',
        lastName: 'Ivanovic'
    },
    {
        firstName: 'John',
        lastName: 'Terry'
    },
    {
        firstName: 'Ricardo',
        lastName: 'Carvalho'
    },
    {
        firstName: 'Ashley',
        lastName: 'Cole'
    },
    {
        firstName: 'Michael',
        lastName: 'Essien'
    }
];

for (let i = 0; i < objectList.lenght; i++) {
    console.log(objectList[i].firstName);
}

objectList.forEach((item, index, array) => {
    console.log(`${index + 1}. ${item.firstName}`);
});