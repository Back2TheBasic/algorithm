let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

let testCases = Number(input[0]);
let line = 1;

const dfs = (graph, N, M, x, y) => {
  if (x <= -1 || x >= M || y <= -1 || y >= N) return false;

  if (graph[y][x] === 1) {
    graph[y][x] = -1;

    dfs(graph, N, M, x + 1, y);
    dfs(graph, N, M, x - 1, y);
    dfs(graph, N, M, x, y + 1);
    dfs(graph, N, M, x, y - 1);
    return true;
  }

  return false;
};

while (testCases--) {
  let [N, M, K] = input[line].split(' ').map(Number);
  let answer = 0;
  let graph = [];

  for (let i = 0; i < N; i++) graph[i] = Array(M);
  for (let i = 1; i <= K; i++) {
    let [x, y] = input[line + i].split(' ').map(Number);
    graph[y][x] = 1;
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (dfs(graph, N, M, j, i)) answer++;
    }
  }

  line += K + 1;
  console.log(answer);
}

// function dfs(graph, n, m, x, y) {
//   if (x <= -1 || x >= m || y <= -1 || y >= n) return false;
//   if (graph[y][x] === 1) {
//     graph[y][x] = -1;
//     dfs(graph, n, m, x - 1, y);
//     dfs(graph, n, m, x, y - 1);
//     dfs(graph, n, m, x + 1, y);
//     dfs(graph, n, m, x, y + 1);
//     return true;
//   }
//   return false;
// }

// let testCases = Number(input[0]);
// let line = 1;

// while (testCases--) {
//   let [m, n, k] = input[line].split(' ').map(Number);
//   let graph = [];
//   for (let i = 0; i < n; i++) {
//     graph[i] = new Array(m); // n*m 빈 array 생성
//   }
//   for (let i = 1; i <= k; i++) {
//     // 심어진 배추 개수
//     let [x, y] = input[line + i].split(' ').map(Number);
//     graph[y][x] = 1;
//   }
//   let answer = 0;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//       if (dfs(graph, n, m, j, i)) answer++;
//     }
//   }
//   line += k + 1;
//   console.log(answer);
// }
