const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .splice(1);

for (let testCase of input) {
  const arr = testCase.split(" ").map(Number);
  const student = arr[0];
  const score = arr.splice(1);
  const sum = score.reduce((a, b) => a + b, 0);
  const average = sum / student;
  let count = 0;
  score.map((value, _) => {
    if (value > average) {
      count++;
    }
  });
  console.log(((count / student) * 100).toFixed(3) + "%");
}
