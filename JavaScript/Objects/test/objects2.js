let obj = {
  age: 99,
  printAge: function () {
    console.log(this.age);
  },
};

const sum = () => {};
obj.printAge();

function Employee(name, age) {
  (this.name = name), (this.age = age);

  return 5;
}
let emp1 = new Employee("a", 3);
console.log("emp", emp1);
