const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

const N = Number(input[0]);
const newArr = [];

for (let i = 1; i <= N; i++) {
  newArr.push(input[i].split(" ").map(Number));
}

newArr.sort((a, b) => {
  if (a[1] !== b[1]) return a[1] - b[1];
  else return a[0] - b[0];
});

let answer = "";
for (let i of newArr) {
  answer += i.join(" ") + "\n";
}
console.log(answer);
