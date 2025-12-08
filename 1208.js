// 함수반복하기

// setInterval(
//   (msg) => {
//     console.log(msg);
//   },
//   2000,
//   "Tick Tock"
// );

/*
setInterval(() => {
  const now = new Date();
  //   console.log(now.getSeconds());
  console.log(now.toLocaleTimeString());
}, 1000);
*/

// const timerId = setInterval(() => console.log("Tick"), 1000);

// setTimeout(() => clearInterval(timerId), 5000);

// 1초경과, 2초경과, 3초경과, 4초경과

let seconds = 0;
setInterval(() => {
  seconds++;
  console.log(`${seconds}초 경과`);
}, 1000);
