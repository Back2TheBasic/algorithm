const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = parseInt(input[0], 10);
const ingredients = input.slice(1).map((line) => line.split(" ").map(Number));

let minDifference = Infinity;

for (let i = 1; i < 1 << N; i++) {
  let sour = 1,
    bitter = 0;
  for (let j = 0; j < N; j++) {
    if (i & (1 << j)) {
      sour *= ingredients[j][0];
      bitter += ingredients[j][1];
    }
  }
  minDifference = Math.min(minDifference, Math.abs(sour - bitter));
}

console.log(minDifference);
