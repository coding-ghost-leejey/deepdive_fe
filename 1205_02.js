const a = 5;
const b = 12;
const c = 20;

// 1. a, b 두 수의 차이를 구하시오. 양수로 구하시오.  Math.abs()
console.log(Math.abs(a - b));

// 2. a,b,c 중에 가장 큰 수를 구하시오
console.log(Math.max(a, b, c));

const price = 1230;
// 3. price의 가격을 100원단위로 올림하시오.
// 1230 -> 1300원
console.log(Math.ceil(price / 100) * 100);

// 1~15까지의 랜덤수를 구하고싶다.
const random = Math.floor(Math.random() * 15) + 1;
console.log(random);
