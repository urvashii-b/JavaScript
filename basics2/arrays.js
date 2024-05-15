// collection of items in a single variable
const myArr = [0,1,2,3,4,5]
console.log(myArr[0]);

// shallow copy of an object is a copy whose properties share the same references
// deep copy of an object is a copy whose properties do not share the same references 

const myArr1 = new Array(1,2,3,4)
console.log(myArr1[2]);
myArr1.push(5)
myArr1.pop()

myArr1.unshift(0)
console.log(myArr1);

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));
console.log(myArr.indexOf(4));

const newArr = myArr.join() // changes to string
console.log(myArr);
console.log(newArr);

console.log("A ",myArr);
const myn1 = myArr.slice(1,3) // 1,2
console.log(myn1)
console.log("B ",myArr); // no change in original arr
const myn2 = myArr.splice(1,3) // 1,2,3
console.log(myn2)
console.log("C ",myArr); // changes original arr

// method 1
const actor = ["sid","varun","shahid"]
const actress = ["kiara","alia","kareena"]
actor.push(actress) // array inside array -> causes problems
console.log(actor);
console.log(actor[3][1]);

// method 2
const actor2 = ["sid","varun","shahid"]
const actress2 = ["kiara","alia","kareena"]
const newHero = actor2.concat(actress2)
console.log(newHero);

// method 3
const actor3 = ["sid","varun","shahid"]
const actress3 = ["kiara","alia","kareena"]
const newHeros = [...actor3, ...actress3] // spread operator
console.log(newHeros);

const notusable = [1,2,[3,4,5],6,7,[8,[9,10]]]
const usable = notusable.flat(Infinity)
console.log(usable);

console.log(Array.isArray("Urvashi"));
console.log(Array.from("Urvashi"))

let s1 = 100
let s2 = 200
let s3 = 300
console.log(Array.of(s1,s2,s3));

