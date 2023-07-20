const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, arr] = input;
const answer = arr
  .toString()
  .trim()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
console.log(answer[0], answer[N - 1]);
