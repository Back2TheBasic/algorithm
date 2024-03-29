let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");

function dfs(arr, depth, start) {
  if (depth === 6) {
    for (let i of selected) answer += arr[i] + " ";
    answer += "\n";
    return;
  }

  for (let i = start; i < arr.length; i++) {
    if (visited[i]) continue;

    selected.push(i);
    visited[i] = true;
    dfs(arr, depth + 1, i + 1);
    selected.pop();
    visited[i] = false;
  }
}

for (let i = 0; i < input.length; i++) {
  let data = input[i].split(" ").map(Number);
  if (data[0] === 0) break;
  else {
    n = data[0];
    arr = data.slice(1);
    visited = new Array(n).fill(false);
    selected = [];
    answer = "";
    dfs(arr, 0, 0);
    console.log(answer);
  }
}
