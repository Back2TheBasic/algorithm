class Queue {
  constructor() {
    this._arr = [];
  }
  enqueue(item) {
    this._arr.push(item);
  }
  dequeue() {
    return this._arr.shift();
  }
  getLength() {
    return this._arr.length;
  }
}

let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

let [s, t] = input[0].split(' ').map(Number);
let queue = new Queue();

queue.enqueue([s, '']);
let visited = new Set([s]);
let found = false;

if (s === t) {
  console.log(0);
  process.exit();
}

while (queue.getLength() !== 0) {
  let [value, opers] = queue.dequeue();
  if (value > 1e9) continue;
  if (value == t) {
    console.log(opers);
    found = true;
    break;
  }

  for (let oper of ['*', '+', '-', '/']) {
    let nextValue = value;
    if (oper == '*') nextValue *= value;
    if (oper == '+') nextValue += value;
    if (oper == '-') nextValue -= value;
    if (oper == '/' && value != 0) nextValue = 1;
    if (!visited.has(nextValue)) {
      queue.enqueue([nextValue, opers + oper]);
      visited.add(nextValue);
    }
  }
}

if (!found) console.log(-1);
