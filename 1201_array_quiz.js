const numbers = [30, 25, 12, 3, 8];

// 1. 10이하의 숫자만 출력하시오. -> 3, 8
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] <= 10) {
    console.log(numbers[i]);
  }
}

const under10 = [];
for (const num of numbers) {
  if (num <= 10) under10.push(num);
}

console.log(under10);

// 2. 아래 과일중 5글자 이하만 출력하시오 -> lemon, lime, melon
const fruits = ["banana", "lemon", "apple mango", "lime", "melon"];
const under5letters = [];
for (const fruit of fruits) {
  if (fruit.length <= 5) under5letters.push(fruit);
}

console.log(under5letters);
