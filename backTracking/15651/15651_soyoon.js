let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split(" ").map(Number);

let [n, m] = input;
let arr = [];
for (let i = 1; i <= n; i++) arr.push(i);

let selected = [];
let answer = "";

function dfs(arr, depth) {
  if (depth === m) {
    for (let i of selected) answer += arr[i] + " ";
    answer += "\n";
    return;
  }

  for (let i = 0; i < n; i++) {
    selected.push(i);
    dfs(arr, depth + 1);
    selected.pop();
  }
}

dfs(arr, 0);
console.log(answer);
