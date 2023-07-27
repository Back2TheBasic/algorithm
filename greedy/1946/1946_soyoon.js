let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");

const testLength = Number(input[0]);

let line = 1;
for (let i = 1; i <= testLength; i++) {
  let n = Number(input[line]);
  let arr = [];

  for (let j = line + 1; j <= line + n; j++) {
    arr.push(input[j].split(" ").map(Number));
  }

  arr.sort((a, b) => a[0] - b[0]);

  let minVal = arr[0][1];
  let answer = 1;
  for (let k = 1; k < arr.length; k++) {
    if (arr[k][1] <= minVal) {
      minVal = arr[k][1];
      answer++;
    }
  }

  // 강의 풀이
  //   for (let [x, y] of arr) {
  //     if (y < minVal) {
  //       minVal = y;
  //       answer += 1;
  //     }
  //   }

  console.log(answer);
  line += n + 1;
}
