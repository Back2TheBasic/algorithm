// 2751번과 풀이 동일
const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

const n = input[0];
const newArr = [];

for (let i = 1; i <= n; i++) {
  newArr.push(Number(input[i]));
}
// 앞에 5줄 대신 map(Number).slice(1) 하면 왜 백준에서 실패 뜨지? vscode에서는 잘 됨

newArr.sort((a, b) => a - b);

let answer = "";
for (let i of newArr) {
  answer += i + "\n";
}

console.log(answer);
