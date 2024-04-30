/*
Stack (copy) - primitive datatypes

Heap (original/reference) - non primitive datatypes
*/

let ytube = "urvashii"
let ytubeSecond = ytube
ytubeSecond = "changed"
console.log(ytube);
console.log(ytubeSecond);

let userOne = {
    email: "urvaa@gmail.com",
    upi: 123,
}
let userTwo = userOne
userTwo.email = "urvaa@ms.com"
console.log(userOne.email);
console.log(userTwo.email); // value of original also changes