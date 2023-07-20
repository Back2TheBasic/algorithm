const input = require("fs").readFileSync("dev/stdin").toString().trim();

const myArr = [];
for (let i of input) {
  myArr.push(i);
}
let answer = "";
myArr
  .sort((a, b) => b - a)
  .map((v, _) => {
    answer += v;
  });

console.log(answer);
