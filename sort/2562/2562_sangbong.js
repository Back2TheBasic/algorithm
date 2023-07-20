const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const max = Math.max(...input);
const index = input.indexOf(max);
console.log(max);
console.log(index + 1);
