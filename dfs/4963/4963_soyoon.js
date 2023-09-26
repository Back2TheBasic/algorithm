let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");

let line = 0;
let answer = "";

const dfs = (graph, w, h, j, i) => {
  if (i <= -1 || i >= h || j <= -1 || j >= w) return false;

  if (graph[i][j] === 1) {
    graph[i][j] = -1;

    dfs(graph, w, h, j + 1, i);
    dfs(graph, w, h, j + 1, i + 1);
    dfs(graph, w, h, j + 1, i - 1);
    dfs(graph, w, h, j - 1, i);
    dfs(graph, w, h, j - 1, i - 1);
    dfs(graph, w, h, j - 1, i + 1);
    dfs(graph, w, h, j, i + 1);
    dfs(graph, w, h, j, i - 1);
    return true;
  }
  return false;
};

while (input[line] !== "0 0") {
  let [w, h] = input[line].split(" ").map(Number);
  let cnt = 0;
  let graph = [];

  for (let i = 0; i < h; i++) {
    graph[i] = input[line + 1 + i].split(" ").map(Number);
  }

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (dfs(graph, w, h, j, i)) cnt++;
    }
  }

  answer += cnt + "\n";
  line += h + 1;
}

console.log(answer);
