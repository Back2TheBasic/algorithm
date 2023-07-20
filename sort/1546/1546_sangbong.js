const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = input[0];
const average = input[1].split(" ").map(Number);
const max = Math.max(...average);
const newAverage = [];

for (let score of average) {
  newAverage.push((score / max) * 100);
}

console.log(newAverage.reduce((a, b) => a + b) / n);
