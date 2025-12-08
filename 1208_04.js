// 2초뒤에 이름찍기

setTimeout(
  (name) => {
    console.log(`Hello, ${name}`);
  },
  2000,
  "Ghost"
);

// 타이머취소
const timerId = setTimeout(() => {
  console.log("실행되지않음");
}, 5000);
clearTimeout(timerId);

// setTimeout 으로, 2초후에, `{~님}, {~초}후에 인사드립니다. `
// 이름, 시간을 입력받기

function greeting(name, seconds) {
  console.log(`${name}님, ${seconds}초 후에 인사드립니다.`);
}

setTimeout(greeting, 2000, "Irangi", 3);
