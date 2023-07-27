const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const testCase = input[0];
let line = 1;

for (let i = 0; i < testCase; i++) {
  let answer = 1;
  n = Number(input[line]);
  let arr = [];
  for (let j = line + 1; j <= line + n; j++) {
    let data = input[j].split(" ").map(Number);
    arr.push(data);
  }
  arr.sort((a, b) => a[0] - b[0]);
  let minValue = arr[0][1];
  for (const [x, y] of arr) {
    if (minValue > y) {
      minValue = y;
      answer++;
    }
  }
  line += n + 1;
  console.log(answer);
}
