const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [_, index] = input[0].split(" ");
const arr = input[1].split(" ").map(Number);

console.log(arr[index]);
