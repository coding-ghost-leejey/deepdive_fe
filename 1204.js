const obj = {
  name: "ghost",
  age: 500,
  sayHello: function () {
    console.log(`Hello, ${this.name}`);
  },

  sayGoodBye: () => {
    console.log(`Good-bye, ${this.name}`);
  },

  printAge() {
    console.log(`${this.name} is ${this.age} years old.`);
  },
};

obj.sayHello();
obj.sayGoodBye(); // undefined
obj.printAge();
