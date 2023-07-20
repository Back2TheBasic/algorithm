const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .splice(1);

const myArr = input.map(v => v.split(" ")).sort((a, b) => a[0] - b[0]);
let answer = "";
myArr.map((v, i) => {
  answer += `${v[0]} ${v[1]}\n`;
});
console.log(answer);
