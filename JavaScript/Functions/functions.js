// Declaring a function
function sayHello() {
  document.write("<br/>");
  document.write("hello");
  document.write("<br/>");
}
sayHello();
// function with argument
function printNumber(num) {
  document.write(num);
}
printNumber(10);

// Declaring a function with default values
function defaultValues(name = "Anand") {
  document.write("<br/>");
  document.write("Hai ", name);
  document.write("<br/>");
}
defaultValues();

// Function with return values
function findSum(num1, num2) {
  var sum = num1 + num2;
  return sum;
}
var sumValue = findSum(10, 20);
document.write("sum value", sumValue);

// Declaring local variables
function sayWelcome(name) {
  let welcomeMsg = "Welcome";
  document.write("<br/>");
  document.write(welcomeMsg, name);
  document.write("<br/>");
}

// accessing local variable welcomeMsg outside of the function.
// document.write(welcomeMsg); // get error
sayWelcome("Anand");

let todayTopic = "Javascript Functions";

function printTodayTopic() {
  document.write("<br/>");
  document.write(todayTopic);
  document.write("<br/>");
}

printTodayTopic();

