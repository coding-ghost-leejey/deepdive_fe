const numbers = [1, 2, 3, 4, 5];

const doubleNumbers = numbers.map((num) => num ** 2);
console.log(doubleNumbers);

const fruits = ["banana", "lemon", "apple mango", "lime", "melon"];

// letters 변수에 fruits의 글자수를 담은 새로운 배열을 만드세요.
// letters = [ 6, 5, 11, 4, 5]
const letters = fruits.map((fruit) => fruit.length);
console.log(letters);
