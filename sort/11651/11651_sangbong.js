const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .splice(1);
let answer = "";

input
  .map((v, _) => v.split(" "))
  .sort((a, b) => {
    if (a[1] == b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  })
  .forEach(v => {
    answer += `${v[0]} ${v[1]}\n`;
  });

console.log(answer);
