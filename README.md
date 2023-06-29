# JS_algorithm

JavaScript Algorithm

## 파일 이름 규칙

문제번호\_이름.js \
ex) 2864_sangbong.js

## Scripts 추가 (230616)

1. greedy/index.js 파일 useName 변경

```javascript
// 유저 이름을 바꿔주세요!
const userName = [유저이름];
```

2. npm run greedy [문제번호]

```javascript
var fs = require("fs");

// 문자 하나만 입력받을 경우
var input = fs.readFileSync("/dev/stdin").toString();

// 한칸 띄어쓰기로 구분
// input[0], input[1] 배열에서 꺼내쓰면 된다.
var input = fs.readFileSync("/dev/stdin").toString().split(" ");

// 줄바꿈으로 구분
var input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 만약 인풋값이 숫자라면
var input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(function (a) {
    return +a;
  });
```

## 여러줄 입력시(n, input)

```javascript
function solution(n, input) {
  console.log(n);
  console.log(input);
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
  //rl.close()가 없어서 계속 입력
  //로컬에서 입력을 중지하려면 입력을 한 후 ctrl+d로 입력 종료
}).on("close", function () {
  let n = parseInt(input[0]);
  let list = input[1].split(" ").map(el => parseInt(el));
  solution(n, list);
  process.exit();
});
```

## 여러줄 입력시(input1, input2)

```javascript
function solution(input1, input2) {
  console.log(input1);
  console.log(input2);
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
  //rl.close()가 없어서 계속 입력
  //로컬에서 입력을 중지하려면 입력을 한 후 ctrl+d로 입력 종료
}).on("close", function () {
  let list1 = input[0].split(" ").map(el => parseInt(el));
  let list2 = input[1].split(" ").map(el => parseInt(el));
  solution(list1, list2);
  process.exit();
});
```

```javascript
readline;
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
}); // 입출력 인터페이스 객체 rl 생성

//한줄
rl.on("line", function (line) {
  // 입력받은 값은 line에 저장된다
  console.log(line);

  rl.close(); //close가 없으면 입력이 끝나지 않는다
}).on("close", function () {
  // 입력이 끝난 후 수행할 코드 입력
  process.exit();
});

//공백 기준
rl.on("line", function (line) {
  input = line.split(" ").map(el => parseInt(el));
  // 문자열을 저장하고 싶으면 map함수를 제외하면 된다

  rl.close();
}).on("close", function () {
  console.log(input);
  process.exit();
});

//여러 줄 입력받기
rl.on("line", function (line) {
  input.push(line);
  // rl.close()가 없어서 입력을 종료시킬 때는 ctrl+c 단축키를 이용하면 된다
}).on("close", function () {
  console.log(input);
  process.exit();
});
```
