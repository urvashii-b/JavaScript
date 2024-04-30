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

