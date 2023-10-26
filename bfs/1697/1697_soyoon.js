// let fs = require("fs");
// let input = fs.readFileSync("./dev/stdin").toString().split("\n");

// const MAX = 100001;
// let [n, k] = input[0].split(" ").map(Number); // n: 초기위치, k: 동생의 위치
// let visited = Array(MAX).fill(0);

// class Queue {
//   constructor() {
//     this._arr = [];
//   }
//   enqueue(item) {
//     this._arr.push(item);
//   }
//   dequeue() {
//     return this._arr.shift();
//   }
//   getLength() {
//     return this._arr.length;
//   }
// }

// function bfs() {
//   queue = new Queue();
//   queue.enqueue(n);

//   while (queue.getLength !== 0) {
//     let cur = queue.dequeue();

//     if (cur === k) return visited[cur];

//     for (let nxt of [cur - 1, cur + 1, cur * 2]) {
//       if (nxt < 0 || nxt >= MAX) continue;
//       if (visited[nxt] === 0) {
//         visited[nxt] = visited[cur] + 1;
//         queue.enqueue(nxt);
//       }
//     }
//   }
// }

// console.log(bfs());

let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");

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

const MAX = 100001;
const visited = Array(MAX).fill(0);
const [N, K] = input[0].split(" ").map(Number);

const bfs = () => {
  const queue = new Queue();
  queue.enqueue(N);

  while (queue.getLength() !== 0) {
    const cur = queue.dequeue();

    if (cur === K) return visited[cur];

    for (let next of [cur - 1, cur + 1, cur * 2]) {
      if (next < 0 || next >= MAX) continue;

      if (visited[next] === 0) {
        visited[next] = visited[cur] + 1;
        queue.enqueue(next);
      }
    }
  }
};

console.log(bfs());
