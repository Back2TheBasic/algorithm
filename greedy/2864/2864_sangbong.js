const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ");

let minResult = 0;
let maxResult = 0;
for (let numbers of input) {
  let min = numbers.replace(/6/g, "5");
  let max = numbers.replace(/5/g, "6");
  minResult += Number(min);
  maxResult += Number(max);
}
console.log(minResult, maxResult);
