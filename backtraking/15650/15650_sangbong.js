const fs = require("fs");
const [N, M] = fs.readFileSync("dev/stdin").toString().split(" ").map(Number);

let result = [];

function backtrack(start, depth) {
  if (depth === M) {
    console.log(result.join(" "));
    return;
  }

  for (let i = start; i <= N; i++) {
    result.push(i);
    backtrack(i + 1, depth + 1);
    result.pop();
  }
}

backtrack(1, 0);
