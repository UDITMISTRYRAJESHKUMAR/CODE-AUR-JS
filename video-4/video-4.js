const accountId = 1445545
let accountEmail = "udit@gmail.com"
var accountPass = "12345"
accountCity =  "gujarat"

let accountState = "a";
// accountId = 2    //not allowd

console.log(accountId);

accountEmail = "uddddit@gmail.com"

console.log(accountEmail);

accountPass = "212121212122"

console.log(accountPass);

accountCity ="goa"
console.log(accountCity);


console.table([accountId,accountEmail,accountPass,accountCity,accountState])


/*
prefer not us var
bcz issus in block scope and funcional scope
*/