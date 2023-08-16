const fs = require("fs");
const N = Number(fs.readFileSync("/dev/stdin").toString());

let output = [];
let visited = Array(N + 1).fill(false);
let result = [];

function backtrack(depth) {
  if (depth === N) {
    output.push(result.slice());
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      result.push(i);
      backtrack(depth + 1);
      visited[i] = false;
      result.pop();
    }
  }
}

backtrack(0);

for (let i = 0; i < output.length; i++) {
  console.log(output[i].join(" "));
}
