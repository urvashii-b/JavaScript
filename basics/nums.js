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