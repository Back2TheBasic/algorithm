let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");

let N = Number(input[0]);

const d = Array(1000001).fill(0);
d[1] = 1;
d[2] = 2;

// 이게 더 속도 빠름
for (let i = 3; i <= N; i++) {
  d[i] = (d[i - 2] + d[i - 1]) % 15746; // 15746을 미리 나누어야 답이 나옴
}

console.log(d[N]);

// const fibo = (x) => {
//     if (d[x] !== 0) return d[x];

//     d[x] = (fibo(x - 2) + fibo(x - 1)) % 15746;
//     return d[x];
// };

// console.log(fibo(N));
