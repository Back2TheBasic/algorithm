let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const d = Array(40).fill(0);
d[0] = 0;
d[1] = 1;

for (let i = 2; i <= 40; i++) {
  d[i] = d[i - 1] + d[i - 2];
}

for (let i = 1; i < input.length; i++) {
  const N = Number(input[i]);
  if (N === 0) console.log(1, 0);
  else console.log(d[N - 1], d[N]);
}
