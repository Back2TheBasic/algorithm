const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

// N 학생수, K 팀 수
let [N, K] = input[0].split(" ").map(Number);

// 키 array
let heights = input[1].split(" ").map(Number);

let differences = [];
for (let i = 1; i < N; i++) {
  differences.push(heights[i] - heights[i - 1]);
}

differences.sort((a, b) => a - b);

// 총 사람 수 - 그룹 수 만큼한 돌면 됨
// 전체 차이 수 N - 1 / 분할 수 K -1
//  N - 1 - (K - 1) = N - K
// e.g 7명의 사람 / 3 그룹
// 1 3 5 6 | 10 12 | 100
// 한명은 혼자 이기 때문에 4개의 차만 구하면 됨.

let result = 0;
for (let i = 0; i < N - K; i++) {
  result += differences[i];
}

console.log(result);
