const accountId = 579 // cannot be changed
let accountEmail = "urvashi@jsi.com"
var accountPassword = "kiiara" // not used due to block & functional scope
accountCity = "Delhi" // can be but should not be used
let accountState; // 'undefined' behaviour
// accountId = 342 // TypeError: Assignment to constant variable.
console.log(accountId);

accountEmail = "urvashi@ms.com"
accountPassword = "zara"
accountCity = "Hyd"

console.table([accountEmail, accountPassword, accountCity, accountState])
