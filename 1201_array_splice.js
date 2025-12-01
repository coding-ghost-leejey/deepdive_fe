const numbers = [10, 20, 30, 40, 50];

// slice(star, end) -> end는 불포함
console.log(numbers.slice(1, 4));
console.log(numbers);

// splice(start, count);
console.log(numbers.splice(1, 3)); // 인덱스넘버 1번부터 3개 삭제
console.log(numbers); // 원본 변형됨

const fruits = ["banana", "apple"];
const newData = numbers.concat(fruits); // 배열2개 합치기
console.log(newData);

const newData2 = [...numbers, ...fruits]; // 전개연산자(데이터 꺼내서 넣기), spread operator
console.log("newData2 : ", newData2);
