const input = require("fs").readFileSync("dev/stdin").toString().trim();

const N = input;
const K = input;

let start = 1;
let end = K;

let result = 0;
while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let count = 0;
  for (let i = 1; i <= N; i++) {
    count += Math.min(Math.floor(mid / i), N);
  }

  if (count < K) {
    start = mid + 1;
  } else {
    result = mid;
    end = mid - 1;
  }
}

console.log(result);
