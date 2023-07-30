const input = require("fs").readFileSync("dev/stdin").toString().trim();

let [a, b] = input.split(" ").map(Number);
const checkOneDigit = value => {
  return value % 10 == 1;
};
const checkEven = value => {
  return value % 2 == 0;
};
const checkEqual = (a, b) => {
  return a == b;
};
let answer = 1;
while (a <= b) {
  if (checkEqual(a, b)) {
    break;
  }
  if (checkEven(b)) {
    b = b / 2;
    answer++;
  } else if (checkOneDigit(b)) {
    b = parseInt(b / 10);
    answer++;
  } else {
    break;
  }
}

if (checkEqual(a, b)) {
  console.log(answer);
} else {
  console.log(-1);
}
