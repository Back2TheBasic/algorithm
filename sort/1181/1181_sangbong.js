const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .splice(1);

const arr = [];
input.map(v => arr.push(v));
const uniqueArr = [...new Set(arr)];

uniqueArr.sort((a, b) => {
  if (a.length != b.length) return a.length - b.length;
  else {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
  }
});

for (let i of uniqueArr) {
  console.log(i);
}
