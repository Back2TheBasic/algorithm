// 내 풀이 - BigInt를 사용하지 않아 부분성공 떴음.
let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");

const roads = input[1].split(" ").map(Number);
const costs = input[2].split(" ").map(Number);

let totalCosts = BigInt(roads[0]) * BigInt(costs[0]);
let minCost = costs[0];

for (let i = 1; i < roads.length; i++) {
  if (costs[i] < minCost) {
    minCost = costs[i];
  }
  totalCosts += BigInt(minCost) * BigInt(roads[i]);
}

console.log(String(totalCosts));

// 강의 풀이 - 아예 최솟값으로 거리를 재세팅 한 다음에 계산
// let n = Number(input[0]);
// let dist = input[1].split(" ").map(Number);
// let cost = input[2].split(" ").map(Number);

// let minCost = cost[0];
// for (let i = 0; i < n; i++) {
//   minCost = Math.min(minCost, cost[i]);
//   cost[i] = minCost;
// }

// let answer = BigInt(0);
// for (let i = 0; i < n - 1; i++) {
//   answer += BigInt(dist[i]) * BigInt(cost[i]);
// }
// console.log(String(answer));
