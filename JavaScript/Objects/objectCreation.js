// Create objects in 3 ways,
// 1. object literals, 2. Using object instance, 3. using object constructor

// 1. Object Literals
var emp = { id: 102, name: "Shyam Kumar", salary: 40000 };
console.log(emp.id, emp.name, emp.salary);

// 2. Creating instance of a object
var objectName = new Object();
var emp2 = new Object();
emp2.id = 101;
emp2.name = "Ravi Malik";
emp2.salary = 50000;
console.log(emp2.id + " " + emp2.name + " " + emp2.salary);

// 3.
function ObjectConstructor(id, name, salary) {
  this.id = id;
  this.name = name;
  this.salary = salary;
}
var objectname = new ObjectConstructor(103, "Vimal Jaiswal", 30000);

console.log("object name", objectname);
