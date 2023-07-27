let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");

const meetings = [];
for (let i = 1; i < input.length; i++) {
  meetings.push(input[i].split(" ").map(Number));
}

meetings.sort((a, b) => {
  if (a[1] !== b[1]) return a[1] - b[1];
  else return a[0] - b[0];
});

let answer = 1;
let cur = 0;
for (let i = 1; i < meetings.length; i++) {
  if (meetings[cur][1] <= meetings[i][0]) {
    cur = i;
    answer++;
  }
}

console.log(answer);
