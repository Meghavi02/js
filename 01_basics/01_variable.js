const accountId = 142348
let accountEmail = "meghavilad@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

// accountId = 2      //not allowed

accountEmail = "hc@hgmail.com"
accountPassword = "2135845"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var 
because of issues in block scope and functional scope
*/
console.table([accountEmail, accountId, accountPassword, accountCity, accountState]);