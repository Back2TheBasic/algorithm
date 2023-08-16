const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const cards = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const M = Number(input[2]);
const numbers = input[3].split(" ").map(Number);

function lowerBound(target) {
  let start = 0;
  let end = N;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (cards[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
}

function upperBound(target) {
  let start = 0;
  let end = N;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (cards[mid] > target) end = mid;
    else start = mid + 1;
  }
  return end;
}

let result = "";
for (let i = 0; i < M; i++) {
  let count = upperBound(numbers[i]) - lowerBound(numbers[i]);
  result += `${count} `;
}

console.log(result);
