var arr = ["a", "b", "c"];
var nums = [1, 2, 3];
var booleans = [true, false, true];

// Data types - Primitive Data types
var name = "Anand"; // string
var salary = 10000; // number

// storing multiple values we can use arrays & objects
// Non primitive data types (store multiple values)
var arr = [];
var obj = {};

// object array
var products = [
  { name: "shirt", price: 500, size: "m", color: "black", discount: 100 },
  { name: "Pant", price: 500, size: "m", color: "black", discount: 100 },
  { name: "Pant", price: 500, size: "m", color: "black", discount: 100 },
  { name: "Pant", price: 500, size: "m", color: "black", discount: 100 },
  { name: "Pant", price: 500, size: "m", color: "black", discount: 100 },
  { name: "Pant", price: 500, size: "m", color: "black", discount: 100 },
  { name: "t-shirt", price: 500, size: "m", color: "black", discount: 400 },
];

// console.log("products", products);
var firstItemName = products[0].name;
// console.log("first item", firstItemName);
var secondItemPrice = products[1].price;
// console.log("seconde item price", secondItemPrice);
var arrLength = products.length; //7

var finalItemDiscount = products[arrLength - 1].discount;
// console.log("final item discount", finalItemDiscount);
// Object creations
// Object Literal
var employeeDetails = {
  name: "Xyz", // string
  age: 25, // number
  isAdmin: true, // boolean
  monthlySalary: [1000, 200, 400, 500],
};

// console.log("entire object", employeeDetails);

// Dot notation
var userAge = employeeDetails.age;
// console.log("user age", userAge);

var isUserAdmin = employeeDetails.isAdmin; // true
// console.log("is user admin", isUserAdmin);

// Object literal
let product = {
  name: "shirt",
  price: 500,
  size: "m",
  color: "black",
  discount: 100,
};

// console.log("Product", product);

var productDiscount = product.discount; // 2.5
// console.log("product discount", productDiscount);

var actualPrice = product.price - product.discount;
// console.log("actual price", actualPrice); // 400

// create object instance
var emp2 = new Object();
console.log("emp 2", emp2);
emp2.id = 101;
emp2.name = "Ravi";
emp2.salary = 50000;

console.log("emp 2 name", emp2.name);

// create object constructor
// We can use constructor for creating multiple objects.

var employees = [];
function Office(id, name, salary) {
  this.id = id;
  this.name = name;
  this.salary = salary;
}
var emp3 = new Office(103, "Vimal Jaiswal", 30000);
var emp4 = new Office(104, "Anand", 20000);

employees.push(emp3);
employees.push(emp4);
console.log("employees db", employees);

console.log("emp3", emp3);
console.log("emp4", emp4);
