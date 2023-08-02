let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");

function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
}

function upperBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] > target) end = mid;
    else start = mid + 1;
  }
  return end;
}

function countByRange(arr, leftValue, rightValue) {
  let rightIndex = upperBound(arr, rightValue, 0, arr.length);
  let leftIndex = lowerBound(arr, leftValue, 0, arr.length);
  return rightIndex - leftIndex;
}

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let m = Number(input[2]);
let query = input[3].split(" ").map(Number);

arr.sort((a, b) => a - b);

answer = "";
for (let i = 0; i < m; i++) {
  let cnt = countByRange(arr, query[i], query[i]);
  answer += cnt + " ";
}
console.log(answer);

// const myCards = input[1]
//   .split(" ")
//   .map(Number)
//   .sort((a, b) => a - b);
// const compareCards = input[3].split(" ").map(Number);

// let answer = "";

// let myCardMap = new Map();
// for (let i of myCards) {
//   if (myCardMap.has(i)) {
//     myCardMap.set(i, myCardMap.get(i) + 1);
//   } else {
//     myCardMap.set(i, 1);
//   }
// }

// for (let i of compareCards) {
//   let count = 0;
//   if (myCardMap.has(i)) count = myCardMap.get(i);

//   answer += count + " ";
// }

// console.log(answer);
