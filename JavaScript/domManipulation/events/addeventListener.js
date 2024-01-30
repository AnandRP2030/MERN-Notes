// click event
const myBtn = document.getElementById("btn");
function myFunc() {
  console.log("btn clicked");
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
}

myBtn.addEventListener("click", myFunc);

// input event
const myInput = document.getElementsByName("name");

myInput[0].addEventListener("input", function () {
  console.log("user typing..", myInput[0].value);
});

// 3rd argument , once => true
const hiBtn = document.getElementById("hi-btn");
hiBtn.addEventListener(
  "click",
  () => {
    alert("Hi ");
    console.log("already worked once.");
  },
  { once: true }
);

// 4. key press
document.addEventListener("keypress", (event) => {
  console.log(event.key);
});

// unload events
window.addEventListener('beforeunload', function (event) {
    // This is where you can log your message
    console.log('Page is about to be unloaded');

    // You can also customize the confirmation message
    event.returnValue = 'retrun some value'; // Standard for most browsers
    // return ''; // For some older browsers
});
