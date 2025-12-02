const users = [
  { name: "Alice", score: 75 },
  { name: "Bob", score: 90 },
  { name: "Charlie", score: 85 },
];

// 시험점수가 80점 이상인 학생들을 추출해서 명단을 만들어 주세요.
// 명단 변수 : passedUsers
// ['Bob','Charlie'] -> 이름만 추출

const passedUsers = users
  .filter((user) => user.score >= 80)
  .map((user) => user.name);

console.log(passedUsers);
