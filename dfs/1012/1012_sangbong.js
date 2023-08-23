const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");
const T = parseInt(input[0]);
let index = 1;

for (let t = 0; t < T; t++) {
  const [M, N, K] = input[index++].split(" ").map(Number);
  const field = Array.from({ length: N }, () => Array(M).fill(0));
  const visited = Array.from({ length: N }, () => Array(M).fill(false));
  let count = 0;

  for (let i = 0; i < K; i++) {
    const [x, y] = input[index++].split(" ").map(Number);
    field[y][x] = 1;
  }

  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];

  function dfs(x, y) {
    visited[y][x] = true;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && ny >= 0 && nx < M && ny < N) {
        if (field[ny][nx] === 1 && !visited[ny][nx]) {
          dfs(nx, ny);
        }
      }
    }
  }

  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (field[y][x] === 1 && !visited[y][x]) {
        dfs(x, y);
        count++;
      }
    }
  }

  console.log(count);
}
