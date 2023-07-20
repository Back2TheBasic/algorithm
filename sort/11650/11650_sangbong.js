const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .splice(1);

const arr = input.filter((v, i) => i >= 0).map(v => v.split(" "));
let answer = "";

arr
  .sort((a, b) => {
    if (a[0] == b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  })
  .forEach(arr => {
    answer += `${arr[0]} ${arr[1]}\n`;
  });

console.log(answer);
