const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const budgets = input[1].split(" ").map(Number);
const m = Number(input[2]);

let left = 0;
let right = Math.max(...budgets);
let result = 0;

while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  let sum = budgets.reduce(
    (acc, cur) => (cur <= mid ? acc + cur : acc + mid),
    0
  );

  if (sum <= m) {
    left = mid + 1;
    result = mid;
  } else {
    right = mid - 1;
  }
}

console.log(result);
