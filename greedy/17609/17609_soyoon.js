let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");

const isPalindrome = (x) => {
  return x === x.split("").reverse().join("");
};

for (let tc = 1; tc <= Number(input[0]); tc++) {
  let data = input[tc];
  if (isPalindrome(data)) console.log(0);
  else {
    let stringLength = data.length;
    let found = false;
    for (let i = 0; i < Math.floor(stringLength / 2); i++) {
      if (data[i] !== data[stringLength - i - 1]) {
        if (isPalindrome(data.slice(0, i) + data.slice(i + 1, stringLength)))
          found = true;
        else if (
          isPalindrome(
            data.slice(0, stringLength - i - 1) +
              data.slice(stringLength - i, stringLength)
          )
        )
          found = true;
        break;
      }
    }
    if (found) console.log(1);
    else console.log(2);
  }
}
