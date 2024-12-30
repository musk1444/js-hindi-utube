const accountId = 12345
let accountEmail = "muskan@google.com"
var accountPassword = "1256"

accountCity = "Satna"
// accountId = 2

// js ko nhi pta scope kya hota tha
/*
prefer not to use var --> because of issue in block scope and functional scope

*/
let accountState

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity])
console.log(accountState);
// agar aap koi value bina assign kiye chod dete h, to js usko undefined maanti h


