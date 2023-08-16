let fs = require("fs");
let n = +fs.readFileSync("./dev/stdin").toString();

let arr = [];
for (let i = 1; i <= n; i++) arr.push(i);
let visited = Array(n).fill(false);
let selected = [];

let answer = "";

function dfs(arr, depth) {
  if (depth === n) {
    for (let i of selected) answer += arr[i] + " ";
    answer += "\n";
    return;
  }

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;

    selected.push(i);
    visited[i] = true;

    dfs(arr, depth + 1);

    selected.pop();
    visited[i] = false;
  }
}

dfs(arr, 0);
console.log(answer);
