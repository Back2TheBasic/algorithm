const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input[0]);
const tasks = Array.from({ length: N }, (_, i) =>
  input[i + 1].split(" ").map(Number)
).sort((a, b) => b[0] - a[0]);
let queue = [];
let idx = 0;
let sum = 0;

const maxDeadline = tasks[0][0];

for (let i = maxDeadline; i > 0; i--) {
  let hasTasksRemaining = tasks[idx][0] >= i;
  let hasDeadlineReached = idx < N;
  let hasTasksInQueue = queue.length > 0;

  while (hasTasksRemaining && hasDeadlineReached) {
    queue.push(tasks[idx++][1]);
    queue.sort((a, b) => a - b);
  }

  if (hasTasksInQueue) {
    sum += queue.pop();
  }
}

console.log(sum);
