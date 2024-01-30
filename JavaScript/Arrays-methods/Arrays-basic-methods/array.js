var evenNumbers = [2, 4, 6, 8, 10, 20, 100, 102, 200];
console.log("even", evenNumbers);

evenNumbers.push(12);
console.log("after push", evenNumbers);

evenNumbers.pop();
console.log("after pop", evenNumbers);

console.log("array length", evenNumbers.length);

// Database
let users = ["Anand", "Sachin", "Rahul", "Rohit", "Virat"];

users.push("new User");
users.push("Dhoni");
console.log("users", users);

var totalLength = users.length;

users.pop();
// console.log("users after pop", users);

let firstUser = users[0];
console.log("first user", firstUser);
let thirdUser = users[2];
console.log("third user", thirdUser);

var arrLength = users.length - 1;
console.log("arr length", arrLength);
var finalUser = users[arrLength];
console.log("final user", finalUser);

console.log(totalLength);

// var name = "Anand"; // string
// console.log(typeof name);

// var weight = 1000; // number
// console.log(typeof weight);

// var num3; // undefined
// console.log(typeof num3);

// var isAdult = true; // bool
// console.log(typeof isAdult);

// var num5 = null;
// console.log(typeof num5);

// typeof method is use for finding a data type of a variable

// var num = 5; // initalizing // primitive data type
// num = 6; // updating
// console.log("num", num);

// const num1 = 5;
// // num1 = 6;
// console.log("num1", num1);

// let num2 = 5;
// num2 = 6;
// console.log("num2", num2);
