const accountId = 144553
let accountEmail = "prat@google.com"
var accountPassword = "12345"
accountCity = "Amritsar"

// accountId = 2 (not allowed)

accountEmail = "grandpa@google.com"
accountCity = "Mohali"

console.log(accountId);

console.table([accountId, accountEmail, accountCity]);

// Prefer not to use var because of issue in block scope and functional scope