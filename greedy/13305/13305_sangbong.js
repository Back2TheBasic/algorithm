const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let distance = input[1].split(" ").map(v => BigInt(v));
let cost = input[2].split(" ").map(v => BigInt(v));
let min = Number.MAX_VALUE;

let answer = 0n;
for (let i = 0; i < cost.length; i++) {
  if (cost[i] < min) {
    min = cost[i];
  } else {
    cost[i] = min;
  }
}
for (let i = 0; i < distance.length; i++) {
  answer += distance[i] * cost[i];
}

console.log(answer.toString());
