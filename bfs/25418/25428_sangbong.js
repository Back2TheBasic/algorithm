const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [A, K] = input;

class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  peek() {
    return this.items[this.headIndex];
  }
  getLength() {
    return this.tailIndex - this.headIndex;
  }
  isEmpty() {
    return this.items.length === 0;
  }
}

function bfs(A, K) {
  const visited = Array(2000001).fill(false);
  const queue = new Queue();
  queue.enqueue({ num: A, count: 0 });

  while (!queue.isEmpty()) {
    const { num, count } = queue.dequeue();

    if (num === K) {
      return count;
    }

    if (num * 2 <= 2000000 && !visited[num * 2]) {
      visited[num * 2] = true;
      queue.enqueue({ num: num * 2, count: count + 1 });
    }

    if (num + 1 <= 2000000 && !visited[num + 1]) {
      visited[num + 1] = true;
      queue.enqueue({ num: num + 1, count: count + 1 });
    }
  }
}

console.log(bfs(A, K));
