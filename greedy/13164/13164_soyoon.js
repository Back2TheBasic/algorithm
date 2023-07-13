const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const kids = input[1].split(" ").map(Number);
const heightDiff = [];

for (let i = 0; i < kids.length - 1; i++) {
  heightDiff.push(kids[i + 1] - kids[i]);
}

heightDiff.sort((a, b) => a - b);

let answer = 0;
for (let i = 0; i < heightDiff.length - (K - 1); i++) {
  answer += heightDiff[i];
}

console.log(answer);

// let [kidsLength, groupLength] = input[0].split(" ").map(Number);
// const kids = input[1].split(" ").map(Number);
// let total = 0;

// for (let i = 0; i < groupLength; i++) {
//   const currentKidsLength = Math.ceil(kidsLength / (groupLength - i));
//   const currentKids = kids.splice(0, currentKidsLength);

//   total += currentKids[currentKids.length - 1] - currentKids[0];
//   kidsLength -= currentKidsLength;
// }

// console.log(total);
// 최소 인원 수 1
// 5명 3개 조 1, 1, 1 기본
// 한 쪽에 몰리면 최대값이 커지니까 최대한 골고루 나뉘어야 함
// N/K = 1.xx Math.ceil -> 2 (한 조에 들어갈 수 있는 최대)
// 인원 5-2 = 3, 남은 조 K-i
// if 3 > 2

// 1 3 5 6 10
// A-최소
// B-
// C-최대

// if 7, 3 -> Math.ceil(7/3) = 3
// 4, 2 => 2
// 2, 1 => 2

// 8, 3 => Math.ceil(8/3) = 3
// 5, 2 => Math.ceil(5/2) = 3
