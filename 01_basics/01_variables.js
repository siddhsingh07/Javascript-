const accountId = 144553
let accountEmail = "siddd@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

let accountState;

// accountId = 2  //not allowed

accountEmail = "krish@gmail.com"
accountPassword = "54321"
accountCity = "Mumbai"

console.log(accountId);

/*
Prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])