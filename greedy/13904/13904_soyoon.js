var fs = require("fs");
var input = fs.readFileSync("dev/stdin").toString().split("\n");

// 뒤에서부터?

// length 부터 시작해서 해당 일에 대기 없으면 그냥 지나가기
// 6일 개수 - 1개면 무조건 그거 진행
// 5일 개수 - 이전에 대기 없으니까 지나가기
// 4일 개수 - 2개 => 큰거 무조건 진행
// 3일 개수 - 4일1개, 3일1개 => 둘 중 큰거 진행
// 2일 개수 - 2일1개, 3일1개 => 둘 중 큰거 진행
// 1일 - 나머지 중 제일 큰거 진행

const homeworks = input.slice(1);

const getCurrentDayChoices = (currentDay) => {
  return homeworks.filter(
    (homework) => Number(homework.split(" ")[0]) >= currentDay
  );
};

const getTargetScoreIndex = (i, targetScore) => {
  let index = i;
  let targetScoreIndex = homeworks.indexOf(`${index} ${targetScore}`);

  while (targetScoreIndex === -1) {
    index += 1;
    targetScoreIndex = homeworks.indexOf(`${index} ${targetScore}`);
  }

  return targetScoreIndex;
};

const getScore = () => {
  let score = 0;
  const deadlines = homeworks.map((homework) => Number(homework.split(" ")[0]));

  for (let i = Math.max(...deadlines); i > 0; i--) {
    const allChoices = getCurrentDayChoices(i);

    if (allChoices.length <= 0) continue;

    const homeworkScores = allChoices.map((homework) =>
      Number(homework.split(" ")[1])
    );
    score = score + Math.max(...homeworkScores);

    const targetScoreIndex = getTargetScoreIndex(
      i,
      Math.max(...homeworkScores)
    );
    homeworks.splice(targetScoreIndex, 1); // sort 쓰면 훨씬 간단하게 가능
  }

  return score;
};

console.log(getScore());
