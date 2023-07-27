const input = require("fs").readFileSync("dev/stdin").toString().split("\n")[0];

const numGroups = input.split("-");

let answer = 0;
for (let i = 0; i < numGroups.length; i++) {
  const currentSum = numGroups[i]
    .split("+")
    .map(Number)
    .reduce((a, b) => a + b, 0);

  if (i === 0) answer += currentSum;
  else answer -= currentSum;
}

console.log(answer);
