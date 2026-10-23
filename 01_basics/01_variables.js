const accountId = 144553
let accountEmail = "nandini@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur" // this can be used to declare variable but not a good way
let accountState; // if wedont assign any value to variable in js the undefined is associated with the variable


//accountId = 2  // not allowed to redeclare const variable
/*  Prefer not to use var
    We use let and const
    because of issue in block scope and functional scope
*/
// let can be reinitialized but it cannot be redeclared
accountEmail = "n@gmail.com"
accountPassword = "21212121"
accountCity = "Bangalore"

console.log(accountId);
console.table([accountId, accountEmail,accountPassword,accountCity,accountState]);
