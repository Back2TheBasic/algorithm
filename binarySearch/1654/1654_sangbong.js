const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [K, N] = input[0].split(" ").map(Number);
const lines = input.slice(1).map(Number);

let start = 1;
let end = Math.max(...lines);

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let count = lines.reduce((acc, cur) => acc + Math.floor(cur / mid), 0);

  if (count >= N) start = mid + 1;
  else end = mid - 1;
}

console.log(end);
