const heading = document.getElementById("myHeading");
// console.log("heading", heading);

function changeContent() {
  heading.innerHTML = "Some new content";
}

function changeHello() {
  heading.innerText = "Hello";
}

// get elements by class names
const boxes = document.getElementsByClassName("box2");
console.log("boxes", boxes);

function addContentToBox1() {
  boxes[0].innerHTML = "<h1> This is box 1 </h1>";
}

// // get elements by tag name

const btns = document.getElementsByTagName("button");
console.log("btns", btns);

// // get elements by name
const allUserNames = document.getElementsByName("login-from");
console.log("userNames", allUserNames);
// /// innerHTML
// // innerText

// // const divBox = document.getElementById("box");
// // divBox.innerHTML = "<div>  <h1 class='my-heading' > Hello World </h1> </div>";

// // querySelector

// const divBox = document.querySelector("#box");
const divBox2 = document.querySelector("button");
// query selector returns only first value
console.log("div box 2", divBox2);

// const firstBtn = document.querySelector("button");
// // console.log(divBox, divBox2);

// function sayHello() {
//   console.log("hellow");
// }

const myForm = document.getElementById("my-form");
 myForm.addEventListener("submit", displayName);

function displayName(event) {
  event.preventDefault();
  const inputValue = document.getElementsByName("login-form")[0].value;
  const input = document.getElementsByName("login-form")[0];
  input.value = '';
  alert(inputValue);
  console.log("form clicked");
}
// // callback functions
// // A callback function in JavaScript is a function that is passed as an argument to another function. This function is then invoked inside the outer function to complete some kind of routine or action
