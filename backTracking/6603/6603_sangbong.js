const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function findCombination(arr, start, result) {
  if (result.length === 6) {
    console.log(result.join(" "));
    return;
  }

  for (let i = start; i < arr.length; i++) {
    result.push(arr[i]);
    findCombination(arr, i + 1, result);
    result.pop();
  }
}

for (const line of input) {
  const numbers = line.split(" ").map(Number);
  const k = numbers[0];

  if (k === 0) {
    break;
  }

  const S = numbers.slice(1);
  findCombination(S, 0, []);
  console.log("");
}
