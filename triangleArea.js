const args = process.argv.slice(2);

const side1 = parseInt(args[0]);
const side2 = parseInt(args[1]);
const side3 = parseInt(args[2]);

let p = 0.5 * (side1 + side2 + side3);


if ((side1 + side2) <= side3 || (side1 + side3) <= side2 || (side2 + side3) <= side1) {
  console.log('Impossible triangle');
} else {
  let formula = Math.sqrt((p * (p - side1) * (p - side2) * (p - side3)));

  console.log(formula.toFixed(4));
}
