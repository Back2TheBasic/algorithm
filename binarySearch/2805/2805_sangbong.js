const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const trees = input[1].split(" ").map(Number);

let start = 0;
let end = Math.max(...trees);

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let sum = trees.reduce((acc, cur) => {
    if (cur > mid) return acc + (cur - mid);
    else return acc;
  }, 0);

  if (sum >= M) start = mid + 1;
  else end = mid - 1;
}

console.log(end);
