const args = process.argv.slice(2);

const num1 = args[0];
const num2 = args[1];
let count = 0

while (count <= 100) {
  count += 1;
  if (count % num1 == 0 && count % num2 == 0) {
    console.log("FizzBuzz");
  } else if ((count % num1) == 0) {
    console.log("Fizz");
  } else if ((count % num2) == 0) {
    console.log("Buzz");
  } else {
    console.log(count);
  }
}
