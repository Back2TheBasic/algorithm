let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");

const pibo = [1, 2];
const arr = [];

for (let i = 1; i < input.length; i++) {
  arr.push(input[i]);
}
const maxNum = Math.max(...arr);

while (pibo[pibo.length - 1] < maxNum) {
  pibo.push(pibo[pibo.length - 2] + pibo[pibo.length - 1]);
}

let answer = "";
for (let i = 0; i < arr.length; i++) {
  let n = arr[i];
  let result = [];
  let index = pibo.length - 1;

  while (n > 0) {
    if (n >= pibo[index]) {
      n -= pibo[index];
      result.push(pibo[index]);
    }
    index--;
  }
  result.sort((a, b) => a - b);
  answer += result.join(" ") + "\n";
}

console.log(answer);
