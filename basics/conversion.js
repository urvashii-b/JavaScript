let score = "69abc"
console.log(typeof score)
console.log(typeof(score))
let valueInNumber = Number(score)
console.log(valueInNumber) // converts to NaN because string has number and characters
console.log(typeof valueInNumber)

let age = null
let valueInNumber2 = Number(age)
console.log(valueInNumber2) // converts to 0 for null
console.log(typeof valueInNumber2)

let marry = undefined
let valueInNumber3 = Number(marry)
console.log(valueInNumber3) // converts to NaN for undefined
console.log(typeof valueInNumber3)

let scare = true 
let valueInNumber4 = Number(scare)
console.log(valueInNumber4) // converts to 1--> true and 0--> false
console.log(typeof valueInNumber4)

/*
can use Booolean(X) & String(X) too, like Number(X)
if X="nasa" --> true
if X="" --> false
*/

// OPERATIONS

let value = 32
let negValue = -value
console.log(negValue)

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**5);
console.log(2/10);
console.log(2%3);

let str1 = "hello"
let str2 = " world"
let str3 = str1+str2
console.log(str3)

console.log("1"+2); // 12
console.log(1+"2"); // 12
console.log("1"+2+2); // 122
console.log(1+2+"2"); // * 32 * --> Use paranthesis: better way

console.log(+true); // converts to 1
// console.log(true+); // SyntaxError: Unexpected token

let x = 3
const y = x++
console.log(`x:${x}, y:${y}`); // x:4, y:3

let a = 4
const b = ++a
console.log(`a:${a}, b:${b}`); // a:5, y:5