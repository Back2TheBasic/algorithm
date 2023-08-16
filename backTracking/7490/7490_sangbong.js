const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const testCase = +input[0];
let n = 0;
let arr = [];

// result : 현재까지의 결과, depth : 현재까지의 길이(깊이)
const makeZero = (result, depth) => {
  // depth가 n-1이면 마지막 숫자까지 다 채운 것이므로 계산
  // 왜 n-1이냐면, 마지막 숫자는 연산자가 필요없기 때문
  if (depth === n - 1) {
    let str = ""; // 결과를 담을 문자열
    for (let i = 0; i < n - 1; i++) str += arr[i] + result[i]; // 숫자와 연산자를 번갈아가며 문자열에 추가
    str += arr[n - 1] + ""; // 마지막 숫자는 연산자가 필요없으므로 그냥 추가
    const current = eval(str.split(" ").join("")); // eval 함수를 이용하여 문자열을 계산
    if (current === 0) console.log(str); // 결과가 0이면 출력
    return;
  }
  // ASCII 코드에서 ' '는 32, '+'는 43, '-'는 45 (순서대로 반복문을 돌리기 위해)
  for (let x of [" ", "+", "-"]) {
    // 백트래킹을 이용하여 현재까지의 결과를 저장하고, 다음 숫자를 계산
    result.push(x);
    makeZero(result, depth + 1);
    result.pop();
  }
};

// 테스트 케이스만큼 반복
for (let i = 1; i <= testCase; i++) {
  n = +input[i];
  arr = [];
  for (let j = 1; j <= n; j++) arr.push(j);
  makeZero([], 0);
  console.log(); // 테스트케이스 사이에 빈 줄 추가
}
