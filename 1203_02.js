const person = {
  name: "ghost",
  age: 500,
  mbti: null,
};

console.log(Object.keys(person).length);

// person에 있는 값(value)들 중에, null이 있는지 확인해 보자.
// 있으면 true, 없으면 false
// includes() 메서드 사용.

const hasNull = Object.values(person).includes(null);
console.log(hasNull);

const tasks = [
  { id: 1, text: "walk" },
  { id: 2, text: "running" },
];

const newTask = { id: 3, text: "programming" };

const finalTasks = [...tasks, newTask];
console.log(finalTasks);

const tasks2 = [1, 2, 5];
const newTasks2 = 3;
const finalTasks2 = [...tasks2, newTasks2];

console.log(finalTasks2);
