const input = require("fs")
    .readFileSync("dev/stdin")
    .toString()
    .trim()
    .split("\n");

console.log(input)
console.log("pug")

const N = Number(input.shift())
const a_arr = input.shift().split(" ")
const a_arrnum = a_arr.map((i)=>Number(i))

const b_arr = input.shift().split(" ")
const b_arrnum = b_arr.map((i)=>Number(i))

// precondition : N개, A배열, B배열 // B배열의 위치는 고정임

// A배열은 sort로 오름차순 정렬 (낮은수가 맨앞)
// B의 크기가 큰 순 index를 갖는 별도 array (B_index_arr)를 만들어 준비

// 이 위아래 구문이 좀 지저분할듯...

// A의 [i] 인덱스와, B의 크기가 큰 인덱스를 매핑시킨다.
// 값 계산 및 합산하여 출력