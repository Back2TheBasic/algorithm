var fs = require("fs");
var input = fs.readFileSync("dev/stdin").toString().split("\n");
const testCase = Number(input[0]);

const getResult = (text) => {
  let result = text[0];

  for (let i = 1; i < text.length; i++) {
    if (text[i] <= result[0]) {
      result = text[i] + result;
    } else {
      result = result + text[i];
    }
  }

  return result;
};

for (let i = 1; i <= testCase; i++) {
  const text = input[i * 2].split(" ");

  const result = getResult(text);
  console.log(result);
}
