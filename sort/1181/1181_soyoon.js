const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

const N = Number(input[0]);

let words = [];
for (let i = 1; i <= N; i++) {
  words.push(input[i]);
}
words = [...new Set(words)];

words.sort((a, b) => {
  if (a.length !== b.length) return a.length - b.length;
  else if (a > b) return 1;
  else if (a < b) return -1;
  else return 0;
});

for (let word of words) {
  console.log(word);
}
