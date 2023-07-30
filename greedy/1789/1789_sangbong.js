let input = require("fs").readFileSync("dev/stdin").toString().trim();

let count = 1;

while (input >= 0) {
  if (input >= count) {
    console.log("input", input, count);

    input -= count;
    count++;
  } else {
    break;
  }
}

console.log(count - 1);
