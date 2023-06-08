const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(1)[0]
  .split(" ")
  .map(Number);

const add = (accumulator, value) => {
  return {
    result: accumulator.result + accumulator.beforeTime + value,
    beforeTime: accumulator.beforeTime + value,
  };
};

const { result } = input
  .sort((a, b) => a - b)
  .reduce(add, { result: 0, beforeTime: 0 });

console.log(result);
