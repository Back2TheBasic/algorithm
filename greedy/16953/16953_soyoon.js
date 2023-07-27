let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split(" ").map(Number);

const startNum = input[0];
let targetNum = input[1];
let answer = 1;

while (targetNum > startNum) {
  if (targetNum % 2 === 0) {
    targetNum /= 2;
    answer++;
  } else if (targetNum % 10 === 1) {
    targetNum = Math.floor(targetNum / 10);
    answer++;
  } else {
    answer = -1;
    break;
  }
}

targetNum !== startNum ? console.log(-1) : console.log(answer);

// 강의 풀이
// let [a, b] = input;
// let flag = false;
// let result = 1;

// while (a <= b) {
//   if (a === b) {
//     flag = true;
//     break;
//   }

//   if (b % 2 == 0) b = parseInt(b / 2);
//   else if (b % 10 === 1) b = parseInt(b / 10);
//   else break;
//   result++;
// }

// if (flag) console.log(result);
// else console.log(-1);
