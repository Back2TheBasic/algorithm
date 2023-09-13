let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

let testCases = Number(input[0]);
let line = 1;

function dfs(graph, n, m, x, y) {
  if (x <= 1 || x >= n || y <= -1 || y >= m) return false;
  if (graph[x][y] === 1) {
    graph[x][y] = -1;
    dfs(graph, n, m, x - 1, y);
    dfs(graph, n, m, x, y - 1);
    dfs(graph, n, m, x + 1, y);
    dfs(graph, n, m, x, y + 1);
    return true;
  }
  return false;
}

while (testCases--) {
  let [m, n, k] = input[line].split(' ').map(Number);
  let graph = [];
  for (let i = 0; i < n; i++) {
    graph[i] = new Array(m); // n*m 빈 array 생성
  }
  for (let i = 1; i <= k; i++) {
    // 심어진 배추 개수
    let [y, x] = input[line + i].split(' ').map(Number);
    graph[x][y] = 1;
  }
  let answer = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (dfs(graph, n, m, i, j)) answer++;
    }
  }
  line += k + 1;
  console.log(answer);
}

// let T = Number(input[0]);
// // for (let testcase = 0; testcase < T; testcase++) {

// // }
// let K = input[1].split(' ').map(Number)[2];

// function dfs(x, cnt) {
//   visited[x] = true;
//   cnt++;

//   for (y of graph[x]) {
//     if (!visited[y]) dfs(y, cnt);
//   }
// }

// for (let i = 2; i < K + 2; i++) {
//   console.log(input[i]);

//   let [x, y] = input[i].split(' ').map(Number);
//   graph[x].push(y);
//   group[y].push(x);

//   let cnt = 0;
//   let visited = Array(K + 1).fill(false);

//   dfs(1, 0);
// }
