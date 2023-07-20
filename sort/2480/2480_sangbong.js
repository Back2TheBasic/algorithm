const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

let count = 1;
let prevNum = -1;
let targetNum = -1;
// 3개 동일
for (let i of input) {
  if (prevNum == i) {
    count++;
    targetNum = i;
  } else {
    prevNum = i;
  }
}

if (count == 3) {
  console.log(10000 + targetNum * 1000);
} else if (count == 2) {
  console.log(1000 + targetNum * 100);
} else if (count == 1) {
  console.log(input[0] * 100);
}
