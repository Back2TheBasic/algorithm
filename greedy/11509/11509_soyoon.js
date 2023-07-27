// 해설 참고
let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");

let data = input[1].split(" ").map(Number);
let result = 0;
let arrow = new Array(1000001).fill(0);

for (let x of data) {
  if (arrow[x] > 0) {
    // 화살표 있을 때
    arrow[x] -= 1;
    arrow[x - 1] += 1;
  } else {
    arrow[x - 1] += 1;
    result += 1;
  }
}
console.log(result);

// let fs = require("fs");
// let input = fs.readFileSync("./dev/stdin").toString().split("\n");

// const balloons = input[1].split(" ").map(Number);
// balloons.sort((a, b) => a - b);

// let currentHeight = balloons[0];
// let arrows = 1;

// for (let i = 1; i < balloons.length; i++) {
//   currentHeight++;

//   if (balloons[i] !== currentHeight) {
//     arrows++;
//     currentHeight = balloons[i];
//   }
// }

// console.log(arrows);
