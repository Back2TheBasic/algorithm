const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const length = Number(input[0]);

const arrToString = arr => {
  let response = "";
  for (let string of arr) {
    response += string;
  }
  return response;
};
const makeFastestAlphabeticalString = arr => {
  let fastestAlphabet = [];
  for (let string of arr) {
    if (string <= fastestAlphabet[0]) {
      fastestAlphabet.unshift(string);
    } else {
      fastestAlphabet.push(string);
    }
  }
  return fastestAlphabet;
};
const solve = () => {
  for (let i = 0; i < length; i++) {
    let answer = "";
    let cards = input[2 * i + 2].split(" ");
    fastestAlphabet = makeFastestAlphabeticalString(cards);
    answer = arrToString(fastestAlphabet);
    console.log(answer);
  }
};

solve();
