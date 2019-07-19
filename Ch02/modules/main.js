const add = require('./add.js');

console.log('5+7=', add(5,7));

const Calculator = require('./calculator.js');

const myCalc = new Calculator();

console.log(`1+2=`,myCalc.add(1,2));
console.log(`10-5=`,myCalc.subtract(10,5));
console.log(`10*5=`,myCalc.multiply(10,5));