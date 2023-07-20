const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString();

const numberSort = [...input].sort((a, b) => Number(b) - Number(a));
console.log(Number(numberSort.join("")));

// 문자 변환 없이 푸는 방법
// const fs = require("fs");
// const input = fs.readFileSync("dev/stdin").toString().trim();

// let cnt = Array(10).fill(0);

// for (let x of input) {
//   cnt[Number(x)]++;
// }

// let answer = "";
// for (let i = 9; i >= 0; i--) {
//   for (let j = 0; j < cnt[i]; j++) answer += i + "";
// }

// console.log(answer);
