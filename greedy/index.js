const fs = require("fs");
const path = require("path");

// 이슈 번호!
const issueNumber = process.argv[2];

// 유저 이름을 바꿔주세요!
const userName = "sangbong";

// 스크립트 경로!
const scriptPath = path.join(
  __dirname,
  issueNumber,
  `${issueNumber}_${userName}.js`
);

// 파일 유무 확인!
if (fs.existsSync(scriptPath)) {
  require(scriptPath);
} else {
  console.log(`${issueNumber}_${userName}.js 파일이 없습니다😅`);
  console.log(`greedy/${issueNumber} 폴더를 확인해보세요!`);
}
