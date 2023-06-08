var input = require("fs")
  .readFileSync("../../dev/stdin")
  .toString()
  .split("\n")[1]
  .split(" ")
  .map(Number);

input.sort((a, b) => a - b);

let sum = 0;
for (let i = 0; i < input.length; i++) {
  sum += input[i] * (input.length - i);
}

console.log(sum);
