const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

const N = Number(input[0]);
const numbers = input[1].split(" ").map(Number);

let sortedNums = [...new Set(numbers)];
sortedNums.sort((a, b) => a - b);

let newMap = new Map();
for (let i = 0; i < sortedNums.length; i++) {
  newMap.set(sortedNums[i], i);
}

let answer = "";
for (let i of numbers) {
  answer += newMap.get(i) + " ";
}

console.log(answer);
