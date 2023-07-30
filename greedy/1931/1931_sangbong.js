const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");
const strToNumArr = str => str.split(" ").map(numString => Number(numString));
const time = input.splice(1);
//회의를 다음 순서대로 정렬
//1) 먼저 끝나는 회의
//2) 끝나는 시간이 같다면, 먼저 시작하는 회의
const schedule = time
  .map(str => strToNumArr(str))
  .sort((a, b) => a[1] - b[1] || a[0] - b[0]);

let result = 0;
let recentEnd = 0;

schedule.forEach(([start, end]) => {
  //전에 진행된 회의가 끝나기 전에 시작되면 다음으로
  if (start < recentEnd) {
    return;
  }
  //아니면 진행
  result++;
  recentEnd = end;
});
console.log(result);
