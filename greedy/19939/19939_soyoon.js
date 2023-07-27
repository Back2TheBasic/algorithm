let fs = require("fs");
let [N, K] = fs.readFileSync("./dev/stdin").toString().split(" ").map(Number);

let sum = 0;
for (let i = 1; i < K + 1; i++) {
  sum += i;
}

if (sum > N) {
  console.log(-1);
} else if ((N - sum) % K === 0) {
  console.log(K - 1);
} else {
  console.log(K);
}
