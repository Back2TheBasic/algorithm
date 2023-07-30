const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [_, K] = input[0].split(" ");
let answer = 0;
const myArr = input
  .splice(1)
  .map(Number)
  .sort((a, b) => b - a);

for (let i of myArr) {
  while (K >= i) {
    K -= i;
    answer++;
  }
}
console.log(answer);
