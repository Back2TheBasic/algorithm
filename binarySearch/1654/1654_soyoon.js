let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");

const N = Number(input[0].split(" ")[1]);
const lines = input.splice(1).map(Number);

let answer = 0;
let start = 1;
let end = Math.max(...lines);

while (start <= end) {
  let total = 0;
  let mid = Math.floor((start + end) / 2);

  for (let line of lines) {
    total += Math.floor(line / mid);
  }

  if (total < N) {
    end = mid - 1;
  } else {
    answer = mid;
    start = mid + 1;
  }
}

console.log(answer);
