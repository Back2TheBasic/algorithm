const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);

const graph = Array.from({ length: N + 1 }, () => []);
const visited = Array(N + 1).fill(false);

for (let i = 1; i <= N - 1; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);
  graph[a].push([b, c]);
  graph[b].push([a, c]);
}

const dfs = (start, end, distance) => {
  if (start === end) return distance;
  visited[start] = true;

  for (const [nextNode, nextDistance] of graph[start]) {
    if (!visited[nextNode]) {
      const result = dfs(nextNode, end, distance + nextDistance);
      if (result !== -1) return result;
    }
  }

  return -1;
};

for (let i = N; i < N + M; i++) {
  const [start, end] = input[i].split(" ").map(Number);
  visited.fill(false);
  console.log(dfs(start, end, 0));
}
