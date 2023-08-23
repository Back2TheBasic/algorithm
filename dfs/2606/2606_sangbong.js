const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input[0]);
const m = parseInt(input[1]);
const graph = Array.from({ length: n + 1 }, () => []);
const visited = Array(n + 1).fill(false);
let count = 0;

for (let i = 2; i < 2 + m; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

function dfs(v) {
  if (visited[v]) return;
  visited[v] = true;
  count++;
  for (const next of graph[v]) {
    dfs(next);
  }
}

dfs(1);
console.log(count - 1);
