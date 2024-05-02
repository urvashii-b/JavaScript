const balanceNum = 100
console.log(balanceNum);

const balance = new Number(100)
console.log(balance);
console.log(balance.toString());
console.log(balance.toFixed(2)); // precision

const no = 123.8966
console.log(no.toPrecision(2)); // 1.2e+2

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++++++++++ MATH +++++++++++++++++++++

console.log(Math.abs(-2))
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))

console.log(Math.random());
console.log((Math.random()*10)+1);

// DICE 
const min = 1
const max = 6
console.log(Math.floor(Math.random()*(max-min+1))+ min)