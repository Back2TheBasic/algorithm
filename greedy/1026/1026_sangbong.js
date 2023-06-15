const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const firstArr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => {
    return a - b;
  });
const secondArr = input[2]
  .split(" ")
  .map(Number)
  .sort((a, b) => {
    return b - a;
  });
let sum = 0;

for (let i = 0; i < input[0]; i++) {
  sum += firstArr[i] * secondArr[i];
}

console.log(sum);
