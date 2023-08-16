let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");

console.log(input);

const [length, width, height] = input[0].split(" ").map(Number);
// 4 4 8

// 4 4 4 - 1개

// 4 4 4
// 2 2 2 - 8개

// 큰 것부터 height,width,length % Math.pow(2, i) = 0
const cubes = [];
for (let i = 2; i <= n + 1; i++) {
  cubes.push(input[i].split(" "));
}
