const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let answer = "";
const originArr = input[1].split(" ").map(Number);
const arrangeArr = [...new Set(originArr)];

arrangeArr.sort((a, b) => a - b);

let myMap = new Map();
for (let i = 0; i < arrangeArr.length; i++) {
  myMap.set(arrangeArr[i], i);
}

for (x of originArr) answer += myMap.get(x) + " ";

console.log(answer);
