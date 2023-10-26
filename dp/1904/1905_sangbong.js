const input = require("fs").readFileSync("dev/stdin").toString().trim();

const getTileCount = (n) => {
  const dp = Array(n).fill(0);
  if (n === 1) return 1;
  else if (n === 2) return 2;
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
  }
  return dp[n] % 15746;
};
console.log(getTileCount(input));
