const accountId = 789838
let accountEmail = "rohityadav789838@gmail.com"
var accountPassword = "12345"
accountCity = "Bhopal"

// accountId = 2 // not allowed 
accountEmail ="abcf@gmail.com"
accountPassword = "4555454"
accountCity = "Indore"
let accountState; // when we not decalared the value the value will be display undefined


/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.log(accountId);
console.table([accountId, accountEmail, accountPassword,accountCity, accountState])