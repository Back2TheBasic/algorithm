const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .splice(1)
  .map(Number);

const answer = input.sort((a, b) => a - b);
for (let num of answer) {
  console.log(num);
}
