const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const [a, b] = input[1].split(" ").map(Number);
const relationships = input.slice(3).map((line) => line.split(" ").map(Number));

const graph = Array.from({ length: n + 1 }, () => []);
for (let [x, y] of relationships) {
  graph[x].push(y);
  graph[y].push(x);
}

const visited = Array(n + 1).fill(false);

function dfs(v, depth) {
  if (v === b) {
    console.log(depth);
    process.exit(0);
  }

  visited[v] = true;

  for (let next of graph[v]) {
    if (!visited[next]) {
      dfs(next, depth + 1);
    }
  }
}

dfs(a, 0);

console.log(-1);
