/*
DataTypes - Primitive & Non-Primitibe
Primitive (7): 
    String, Number, Boolean, null, undefined, BigInt, Symbol {unique}
Non-Primitive (Reference):
    Array, Objects, functions

Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint
2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

* JavaScript is a dynamically typed language, 
which means that the type of a variable is not declared when it is created. *
*/
const score = 100
const scoreVal = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined
const id = Symbol('123')
const secondid = Symbol('123')
console.log(id === secondid); // false--> unique assignment
const bigNum = 23738681393176n

const comics = ["marvel","dc","geronimo"]; // array
let myObj = { // object
    name: "urvashi",
    age: 21,
}
const myFunction = function(){
    console.log("Hello");
}
