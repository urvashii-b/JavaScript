"use strict"; // treat all JS code as newer version
// alert(3+3) // using nodejs (not browser) so doesn't work

console.log(3+3); console.log("Urvashi"); // not readable

// better way - focus on code readability
console.log(3+3)
console.log("Urvashi")

let name = "Ash" // string
let age = 5 // number
let isLoggedIn = false // boolean
let hi = null; // null --> standalone value
let bye; // undefined

console.log(typeof null); // weird but prints "object"
console.log(typeof undefined); // "undefined"