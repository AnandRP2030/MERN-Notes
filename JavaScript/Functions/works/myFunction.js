// 1. function declaration
// 2. function passing multiple arguments
// 3. function return values
// 4. function setting default values.

// 1. function declaration
function sayHello() {
  document.write("Hello");
}
// sayHello();

// 2. passing arguments
// we can pass values(arguments) inside functions
function printName(name) {
  //   alert(name);
  document.write("Name", name);
  console.log("Name", name);
}

printName("Anand");
printName("Sarath");

function findSum(num1, num2) {
  var sum = num1 + num2;
  document.write("<br/>");
  document.write("sum ", sum);
}

findSum(10, 20); // 30
findSum(50, 70); // 120

// 3. function return values

function sub(num1, num2) {
  var ans = num1 - num2;
  return ans;
}

var ans = sub(50, 20);

document.write("<br/>");
document.write("answwer", ans);

// 4. function default argument values
function showWelcomMsg(name = "Anand") {
  document.write("<br/>");
  document.write("Default values", name);
}
showWelcomMsg("Sarath");
showWelcomMsg();

// camel casing
// first letters small & then capital lettes for each words
