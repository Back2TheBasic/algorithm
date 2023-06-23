var fs = require("fs");
var input = fs.readFileSync("dev/stdin").toString().split("\n");
const testCase = Number(input[0]);

let result = "";
let answer = "";

const getResult = (textLength, text) => {
  for (let i = 0; i < textLength; i++) {
    if (i === 0) {
      result += text[i];
      continue;
    }

    if (text[i].charCodeAt(0) <= result[0].charCodeAt(0)) {
      result = text[i] + result;
    } else {
      result = result + text[i];
    }
  }
};

for (let i = 1; i <= testCase; i++) {
  getResult(Number(input[i * 2 - 1]), input[i * 2].split(" "));
  answer = answer ? answer + "\n" + result : result;
  result = "";
}

console.log(answer);
