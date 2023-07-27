const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split("\n");

const condition = input[0].split(" ").map(Number);
const N = condition[0];
let K = condition[1];

const coins = input.splice(1).map(Number);
//   .sort((a, b) => b - a);

let answer = 0;

// for (let i = 0; i < N; i++) {
for (let i = N - 1; i >= 0; i--) {
  if (K <= 0) break;
  if (K / coins[i] < 1) continue;

  answer += Math.floor(K / coins[i]);
  K %= coins[i];

  //   K -= Math.floor(K / coins[i]) * coins[i];
}

console.log(answer);
