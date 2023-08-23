let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

let n = Number(input[0]);
let m = Number(input[1]);
let graph = [];
for (let i = 1; i <= n; i++) graph[i] = [];
for (let i = 2; i <= m + 1; i++) {
  let [x, y] = input[i].split(' ').map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

let cnt = 0;
let visited = Array(n + 1).fill(false); // 0을 사용하지 않기 위해 +1
function dfs(x) {
  visited[x] = true;
  cnt++;
  for (y of graph[x]) {
    if (!visited[y]) dfs(y);
  }
}
dfs(1);
console.log(cnt - 1); // 처음에 dfs(1)을 하면서 cnt++이 적용되기 때문에 -1 한 값을 출력
