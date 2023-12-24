// 1. Local Varialbes are declared inside a function
function validation() {
  let place = "Trivandrum";
  console.log("place", place);
  return place;
}

let place = validation();
console.log("place", place);

// 2. global variables we can use anywhere from the file.
var state = "Kerala";
function printState() {
  console.log("state", state);
}

printState();

// Data types are two types
// 1. Primitive Data types  (store a single value)
// 2. non primitive data types (store multiple values)

// 1. Primitive Data types
// number (1, 2, 4.5, -100)
// string ("Hello", 'hello')
// boolean (true, false)
// undefined
// null

// 2. non primitive data types
// object (store differnt dat type values, {key: value})
// array (store similar data types eg. [1, 2, 4, 5], )

// if we declare a variable but not assign any values then its undefined.
var country;
console.log("country", country); // undefined

var age = null;
console.log("age", age); // null

age = 100; // reassigning
console.log("age", age); // 100

// () parenthsis
// [] square brackets
// {} curly braces

let userName = "john";
function showMessage() {
  let message = "Hello, " + userName;
  alert(message); // Hello john
}
showMessage();
