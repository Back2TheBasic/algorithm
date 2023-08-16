const fs = require("fs");
const [N, M] = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);

let result = [];
let output = [];

function backtrack(depth) {
  if (depth === M) {
    output.push(result.join(" ") + "\n");
    return;
  }

  for (let i = 1; i <= N; i++) {
    result.push(i);
    backtrack(depth + 1);
    result.pop();
  }
}

backtrack(0);
console.log(output.join(""));
