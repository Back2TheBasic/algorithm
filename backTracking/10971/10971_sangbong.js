/**
 * https://www.acmicpc.net/problem/10971
 * 문제 해결 아이디어 
 * 
 1. 모든 도시를 한 번씩 방문하는 경로를 찾아야 합니다. 이는 모든 가능한 경로를 고려해야 하는 완전 탐색 문제로 볼 수 있습니다.

2. 시작 도시를 정한 후, 다음 도시로 이동할 때마다 비용을 더하고, 마지막 도시에서 시작 도시로 돌아올 수 있는지 확인합니다. 
이때, 이동 경로의 비용이 현재까지 찾은 최소 비용보다 크다면, 그 이후의 경로는 고려하지 않아도 됩니다. (가지치기, Pruning)

1. 초기 설정
min_cost를 매우 큰 값으로 설정하여, 최소 비용을 저장할 변수를 초기화합니다.
시작 도시를 0으로 설정하고, 이를 방문한 것으로 표시합니다.

2. 완전 탐색 시작
DFS (깊이 우선 탐색) 또는 순열을 이용하여 모든 경로를 탐색합니다.
현재 도시에서 다음 도시로 이동할 때마다 비용을 더하고, 마지막 도시에서 시작 도시로 돌아올 수 있다면, 그 비용이 현재까지 찾은 최소 비용보다 작은지 확인합니다.
만약 작다면, min_cost를 업데이트합니다.

3.결과 출력
완전 탐색이 끝나면, min_cost를 출력합니다. 이 값이 외판원의 순회에 필요한 최소 비용이 됩니다.
 */

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const costs = input.slice(1).map((line) => line.split(" ").map(Number));

let min_cost = Infinity;

function dfs(city, visited, total_cost) {
  if (visited.every((v) => v)) {
    if (costs[city][0] > 0) {
      min_cost = Math.min(min_cost, total_cost + costs[city][0]);
    }
    return;
  }

  for (let next = 1; next < N; next++) {
    if (!visited[next] && costs[city][next] > 0) {
      visited[next] = true;
      dfs(next, visited, total_cost + costs[city][next]);
      visited[next] = false;
    }
  }
}

const visited = Array(N).fill(false);
visited[0] = true;
dfs(0, visited, 0);

console.log(min_cost);
