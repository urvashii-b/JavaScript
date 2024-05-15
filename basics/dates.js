let myDate = new Date()
// console.log(myDate.toString()); // Thu May 02 2024 23:29:26 GMT+0530 (India Standard Time)
// console.log(myDate.toISOString()); // 2024-05-02T18:04:08.858Z
// console.log(myDate.toDateString()); // Thu May 02 2024
// console.log(myDate.toTimeString()); // 23:34:55 GMT+0530 (India Standard Time)
// console.log(myDate.toUTCString()); // Thu, 02 May 2024 18:06:44 GMT
// console.log(myDate.toJSON()); // 2024-05-02T18:06:58.814Z
console.log(myDate.toLocaleString()); // 2/5/2024, 11:37:12 pm
console.log(typeof myDate) // object

let createdDate = new Date(2023, 0, 23)
let createdDate2 = new Date(2023, 0, 23, 5, 3)
let createdDate3 = new Date("2023-01-23")
let createdDate4 = new Date("01-14-2023")
console.table([createdDate.toLocaleString(), createdDate2.toLocaleString(), createdDate3.toLocaleString(), createdDate4.toLocaleString()])

let myTimestamp = Date.now()
console.log(myTimestamp);

console.log(createdDate.getTime())

console.log(Math.floor(Date.now()/1000)) // seconds

let newDate = new Date()
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
newDate.toLocaleString('default',{
    weekday: 'long',
})
