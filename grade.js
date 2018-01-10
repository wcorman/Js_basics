const args = process.argv.slice(2);

const num1 = parseInt(args[0]);

if (num1 < 0 || num1 > 100 || !num1) {
  console.log('Enter a valid grade')
} else if (num1 < 50) {
  console.log('FAIL')
} else if (num1 < 60) {
  console.log('D')
} else if (num1 < 70) {
  console.log('C+')
} else if (num1 < 80) {
  console.log('B+')
} else if (num1 < 90) {
  console.log('A-')
} else if (num1 < 100) {
  console.log('A+')
} else {
  console.log('Perfect')
}
