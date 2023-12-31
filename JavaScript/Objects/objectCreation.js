// Create objects in 3 ways,
// 1. object literals, 2. Using object instance, 3. using object constructor

// 1. Object Literals
var emp = { id: 102, name: "Shyam Kumar", salary: 40000 };
document.write(
  "id " +
    emp.id +
    " <br/> Name: " +
    emp.name +
    "<br/>  Salary:" +
    emp.salary +
    " <br/>"
);

// 2. Creating instance of a object
var objectName = new Object();
var emp2 = new Object();
emp2.id = 101;
emp2.name = "Ravi Malik";
emp2.salary = 50000;
document.write(emp2.id + " " + emp2.name + " " + emp2.salary);

// 3.
function ObjectConstructor(id, name, salary) {
  this.id = id;
  this.name = name;
  this.salary = salary;
}
var objectname = new objectConstructor(103, "Vimal Jaiswal", 30000);

console.log("object name", objectname);
