const numbers = [30, 25, 12, 3, 8];
const fruits = ["banana", "lemon", "apple mango", "lime", "melon"];

const banana = fruits.filter((fruit) => fruit === "banana");

const under10 = numbers.filter((number) => number <= 10);
console.log(under10);

// 2. 아래 과일중 5글자 이하만 출력하시오 -> lemon, lime, melon
const under5 = fruits.filter((fruit) => fruit.length <= 5);
console.log(under5);
