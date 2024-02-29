// Local Modules: These are modules created by developers within their own applications. They are typically JavaScript files that export functions, objects, or classes for use in other parts of the application. Local modules are loaded using relative paths.

// Example of a local module (myModule.js):
// myModule.js
function sayHello() {
  console.log("Hello!");
}

function findSum(num1, num2) {
  return num1 + num2;
}

function getData() {
  let data = fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
  return data;
}

module.exports = {
  findSum,
  getData,
  sayHello,
};
