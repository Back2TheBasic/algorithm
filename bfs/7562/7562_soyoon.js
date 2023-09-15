let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

const dx = [-2, -2, -1, -1, 1, 1, 2, 2];
const dy = [-1, 1, -2, 2, -2, 2, -1, 1];

let testcases = Number(input[0]);
let line = 1;

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

while (testcases--) {
  let l = Number(input[line]);
  let [x, y] = input[line + 1].split(' ').map(Number);
  let [targetX, targetY] = input[line + 2].split(' ').map(Number);
  let visited = [];
  for (let i = 0; i < l; i++) visited.push(Array(l).fill(0)); // l*l

  queue = new Queue();
  queue.enqueue([x, y]);
  visited[x][y] = 1;
  while (queue.getLength() != 0) {
    let cur = queue.dequeue();
    x = cur[0];
    y = cur[1];
    for (let i = 0; i < 8; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx < 0 || nx >= l || ny < 0 || ny >= l) continue;
      if (visited[nx][ny] == 0) {
        visited[nx][ny] = visited[x][y] + 1;
        queue.enqueue([nx, ny]);
      }
    }
  }
  line += 3;
  console.log(visited[targetX][targetY] - 1);
}
