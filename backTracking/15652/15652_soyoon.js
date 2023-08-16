let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split(" ").map(Number);

let [n, m] = input;

let arr = [];
for (let i = 1; i <= n; i++) arr.push(i);

let selected = [];
let answer = "";

function dfs(arr, depth, start) {
  if (depth === m) {
    for (let i of selected) answer += arr[i] + " ";
    answer += "\n";
    return;
  }

  for (let i = start; i < n; i++) {
    selected.push(i);
    dfs(arr, depth + 1, i);
    selected.pop();
  }
}

dfs(arr, 0, 0);
console.log(answer);
