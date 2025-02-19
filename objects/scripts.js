const score = 500;
console.log(typeof score);
const balance = new Number(100);
console.log(balance);
console.log(balance.toFixed(2));
const num2 = 23.8998;
console.log(num2.toPrecision(2));

const num3 = 1000000;
console.log(num3.toLocaleString("en-IN"));

//******************maths******************

console.log(Math.PI);
console.log(Math.abs(-4));
console.log(Math.round(2.6));
console.log(Math.ceil(3.3));
console.log(Math.floor(3.9));
console.log(Math.max(2, 9, 19, 88));

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
