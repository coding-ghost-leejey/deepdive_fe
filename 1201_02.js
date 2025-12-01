const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 01. filter를 사용하여 짝수만 골라서 evenNumbers 변수에 담아 출력합니다.
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(`Even numbers : `, evenNumbers);

// 02. evenNumbers의 숫자들을 모두 2제곱수로 만들어서 doubleNumbers 변수에 담아 출력합니다. map
const doubleNumbers = evenNumbers.map((num) => num ** 2);
console.log("제곱수로 변환 : ", doubleNumbers);

const arr = [13, 5, 22, 10, 5, 15, 82];
// 03. arr 인덱스 3번째부터 4번째까지만 추출하기 -> [ 10, 5 ]

console.log(arr.slice(3, 5));

// 04. arr 에서 짝수의 개수를 구하시오. // filter, length사용  -> 3

const evenCounting = arr.filter((num) => num % 2 === 0).length;
console.log(evenCounting);

// 05. arr에서 5의 배수의 개수를 구하시오. -> 4
const fiveCounting = arr.filter((num) => num % 5 === 0).length;
console.log("5의 배수의 개수는 : ", fiveCounting);
