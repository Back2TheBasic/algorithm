let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString();

let candies = Number(input);
let fiveKg = Math.floor(candies / 5);

while (fiveKg >= 0) {
  const remain = candies - fiveKg * 5;
  if (remain % 3 === 0) {
    console.log(fiveKg + remain / 3);
    return;
  } else {
    fiveKg--;
  }
}

console.log(-1);
