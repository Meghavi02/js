const { log } = require("util");

const score = 505
// console.log(score);

const balance = new Number(100) 
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(5));

const anotherNumber = 122.5454
// console.log(anotherNumber.toPrecision(3));


const hundreds = 2000000
// console.log(hundreds.toLocaleString('en-IN'));



//************Maths**********************

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(5.6));
// console.log(Math.ceil(8.2));
// console.log(Math.floor(5.6));
// console.log(Math.min(4,5,2,6));
// console.log(Math.max(4,5,2,6));
console.log(Math.random());   //values between 0 to 1
console.log((Math.random()*10) + 1);
console.log((Math.floor(Math.random()*10)) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
