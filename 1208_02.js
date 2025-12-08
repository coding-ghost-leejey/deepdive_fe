// reduce

const nums = [1, 2, 3, 4, 5];
const sum = nums.reduce((a, c) => a + c, 0);
console.log(sum);

const cart = [
  { item: "apple", price: 12900 },
  { item: "banana", price: 4900 },
  { item: "onion", price: 5200 },
];

// cart의 가격을 모두 합산한 값을 구하시오.
// '장바구니 총액은 ___ 입니다'
const total = cart.reduce((a, c) => a + c.price, 0);
console.log(`장바구니 총액은 ${total}원 입니다.`);

const str = "dog dog Dog";
// console.log(str.replace("dog", "cat"));
console.log(str.replace(/dog/gi, "cat"));

const str2 = "hello world";
// world를 ghost로 변경하여 출력하시오.
console.log(str2.replace("world", "ghost"));
console.log(str2.slice(6, 9));
console.log(str2.slice(6)); // world -> 6번째부터 끝까지
console.log(str2.slice(-5)); // world -> 뒤에서 5번째부터 끝까지
