// 왜 이진탐색 방법? 왜 교체하는 방식으로 정렬 진행해야 하는지?
// 순서 유지한 상태에서 열외할 대상만 고르는건데 push하고 index 교체하는 과정에서 순서 섞이는건 아닌지?

let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

// LIS 알고리즘
const N = Number(input[0]);
const arr = input[1].split(' ').map(Number).reverse();
let answer = [];

for (let i = 0; i < N; i++) {
  answer[i] = 1;
}

let max_num = 0;

for (let i = 1; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[j] < arr[i]) {
      answer[i] = Math.max(answer[i], answer[j] + 1);
    }
  }
}

max_num = Math.max(...answer);

console.log(N - max_num);

// binary search 알고리즘
// function lowerBound(arr, target, start, end) {
//   while (start < end) {
//     let mid = parseInt((start + end) / 2);
//     if (arr[mid] >= target) end = mid;
//     else start = mid + 1;
//   }
//   return end;
// }

// const n = Number(input[0]);
// const soldiers = input[1].split(" ").map(Number).reverse();

// let d = [0];
// for (x of soldiers) {
//   if (d[d.length - 1] < x) {
//     d.push(x);
//   } else {
//     let index = lowerBound(d, x, 0, d.length);
//     d[index] = x;
//   }
// }

// console.log(n - (d.length - 1));
