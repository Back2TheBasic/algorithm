const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let idx = 0;
let testCase = 1;
while (true) {
  const [n, m] = input[idx++].split(" ").map(Number);
  if (n === 0 && m === 0) break;

  const graph = Array.from({ length: n + 1 }, () => []);
  const visited = Array(n + 1).fill(false);

  for (let i = 0; i < m; i++) {
    const [a, b] = input[idx++].split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
  }

  let treeCount = 0;

  const dfs = (node, parent) => {
    visited[node] = true;
    let isTree = true;

    for (const next of graph[node]) {
      if (next === parent) continue;
      if (visited[next]) {
        isTree = false;
      } else {
        if (!dfs(next, node)) {
          isTree = false;
        }
      }
    }

    return isTree;
  };

  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      if (dfs(i, -1)) {
        treeCount++;
      }
    }
  }

  if (treeCount === 0) {
    console.log(`Case ${testCase}: No trees.`);
  } else if (treeCount === 1) {
    console.log(`Case ${testCase}: There is one tree.`);
  } else {
    console.log(`Case ${testCase}: A forest of ${treeCount} trees.`);
  }
  testCase++;
}
