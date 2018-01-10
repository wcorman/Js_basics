const args = process.argv.slice(2);
const password = args[0];
const correctPassword = "opensesame"

if (password === undefined) {
console.log("Password argument is required!");
} else if ((password) == correctPassword) {
  console.log("secret number: 714");
} else {
  console.log("***Access Denied***");
}
