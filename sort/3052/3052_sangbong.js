const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const answer = [];

const checkArr = value => {
  if (answer.indexOf(value) === -1) {
    answer.push(value);
  }
};

for (let i of input) {
  checkArr(i % 42);
}

console.log(answer.length);
