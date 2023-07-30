const input = require("fs").readFileSync("dev/stdin").toString().trim();

const hasMinus = input.split("-");

let answer = 0;
for (let i = 0; i < hasMinus.length; i++) {
  let cur = hasMinus[i]
    .split("+")
    .map(Number)
    .reduce((a, b) => a + b);
  if (i == 0) answer += cur;
  else answer -= cur;
}
console.log(answer);
