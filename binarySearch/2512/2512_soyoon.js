let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");

let arr = input[1].split(" ").map(Number);
let m = Number(input[2]);

let answer = 0;
let start = 1;
let end = Math.max(...arr);

while (start <= end) {
  let mid = Math.trunc((start + end) / 2);
  let total = 0;

  for (let x of arr) {
    total += Math.min(mid, x);
  }

  if (total <= m) {
    answer = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(answer);
