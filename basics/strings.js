const name = "urvashi"
const repoCount = 39
// console.log(name + repoCount + " Value")
console.log(`Hello, my name is ${name} & my repo count is ${repoCount}`);

const gameName = new String("snakes-and-ladders") // object
console.log(gameName[0]);
console.log(`length of the game name is ${gameName.length}`);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); // which char at '2' index
console.log(gameName.indexOf('a')); // which index

const newStr = gameName.substring(0,4)
console.log(newStr);

const newStr2 = gameName.slice(-8,4)
console.log(newStr2);

const code = "      JavaScript        "
console.log(code.trim()); // removes whitespaces at the beginning and end

const url = "https://urvashi%20portfolio.com"
console.log(url.replace('%20','-'));

console.log(url.includes('pioneer'));
console.log(url.includes('urvashi'));

console.log(gameName.split('-')); // string to array