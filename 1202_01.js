const price = [1000, 2000, 3000];
// 이 가격을 2배로 모두 인상해서 새로운 가격표를 만들어야한다.
// map
const newPrice = price.map((data) => data * 2);
console.log(newPrice);

const ages = [15, 22, 19, 30, 12];
// 20세 이상인 성인만 필터링, filter
const adult = ages.filter((age) => age >= 20);
console.log(adult);

const str = ["a", "b", "c", "d", "e", "c"];
console.log(str.indexOf("c")); // 2 맨 처음것 찾음
console.log(str.lastIndexOf("c")); // 5 맨마지막것 찾음
console.log(str.indexOf("f")); // 없으니까 -1
console.log(str.includes("c")); // true
console.log(str.includes("f")); // false
console.log(str.includes("C")); // false

str.reverse();
console.log(str);

const numbers = [1, 5, 3, 8, 2, 13, 32];

numbers.sort((a, b) => a - b);
console.log(numbers);
numbers.sort((a, b) => b - a);
console.log(numbers);

const myfruits = "apple,banana,mango";
const myArray = myfruits.split(",");
console.log(myArray);

console.log(myArray.join("-"));
