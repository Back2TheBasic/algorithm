let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split(" ");

const num1 = input[0];
const num2 = input[1];

const min =
  Number(num1.replaceAll("6", "5")) + Number(num2.replaceAll("6", "5"));
const max =
  Number(num1.replaceAll("5", "6")) + Number(num2.replaceAll("5", "6"));

console.log(min + " " + max);
