
// Primitive datatypes (store a single value)
// undefined means we declare value but not initialized
var x;
console.log("x: ", x); // undefined

x = 10;
console.log("x: ", x);

var sum = null;
console.log("sum =>", sum); // null

// concatination
var addition = "XYZ" * 5;
console.log("additon", addition); // NaN => Not a Number

var name = "Vignesh"; // string
var phoneNumber = 1234324; // number
var haveLicense = true; // boolean

console.log("data type of phone number", typeof phoneNumber); // number


// Non primitive data types
// Arrays
// Objects
// Non primitive data types
// Arrays
var arr = [1, 2, 3, 4, 5]; // array of numbers
console.log(arr);

var names = ["John", "Jane", "Mike"]; // array of strings
console.log(names);

var mixed = [1, "hello", true]; // array of mixed data types
console.log(mixed);

// Objects
var person = {
  name: "John",
  age: 30,
  city: "New York"
};
console.log(person);

var car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020
};
console.log(car);