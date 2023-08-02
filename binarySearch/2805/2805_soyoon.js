let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");

const M = Number(input[0].split(" ")[1]);
const trees = input[1].split(" ").map(Number);

let start = 1;
let end = Math.max(...trees);

let answer = 0;

while (start <= end) {
  let total = 0;
  let mid = Math.floor((start + end) / 2);

  for (let x of trees) {
    if (x > mid) total += x - mid;
  }

  if (total < M) {
    end = mid - 1;
  } else {
    answer = mid;
    start = mid + 1;
  }
}

console.log(answer);
