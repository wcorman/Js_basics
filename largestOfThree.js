const args = process.argv.slice(2);

const num1 = parseInt(args[0]);
const num2 = parseInt(args[1]);
const num3 = parseInt(args[2]);

// let max = Math.max(num1, num2, num3);

// console.log(`The largest number is ${max}`);

let largestNum

  if (num1 > num2 && num1 > num3) {
    largestNum = num1
  } else if (num2 > num1 && num2 > num3) {
    largestNum = num2
  } else if (num3 > num2 && num3 > num1) {
    largestNum = num3
  }
console.log(`The largest number is ${largestNum}`);
