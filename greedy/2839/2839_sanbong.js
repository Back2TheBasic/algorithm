const input = require("fs").readFileSync("dev/stdin").toString().trim();

let N = parseInt(input);
let answer = 0;
let not_div_3_or_5 = false;
while (N >= 0) {
  if (N == 0 || N % 5 === 0) {
    answer += N / 5;
    console.log(answer);
    not_div_3_or_5 = true;
    break;
  }
  N -= 3;
  answer++;
}
if (!not_div_3_or_5) {
  console.log(-1);
}
