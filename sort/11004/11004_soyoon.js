const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

const [_, K] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number);

numbers.sort((a, b) => a - b);

console.log(numbers[K - 1]);
