// 날짜 객체

const now = new Date();
console.log(now);

const year = now.getFullYear();
const month = now.getMonth() + 1; // 0부터 시작
const date = String(now.getDate()).padStart(2, "0");  // 3:15:3 -> 03:15:03
const day = now.getDay(); // 요일, 0 - 일요일, 1 - 월, 2 - 화, 3 - 수, 4- 목, 5- 금, 6 -토
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

console.log(year, month, date, day);
console.log(`${hours} : ${minutes} : ${seconds} `);
console.log(Date.now());

console.log(now.toLocaleTimeString());
console.log(now.toLocaleDateString());

console.log(Date.now());

const a = 5;
const b = "5";

console.log(typeof a);
console.log(b);

console.log(Number(b));
console.log(String(a));
console.log(Boolean("hello"));
