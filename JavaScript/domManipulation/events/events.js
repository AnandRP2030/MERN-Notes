function onload() {
//   alert("Welcome to event listeners");
}

function upperCase(e) {
  console.log(e);
  var value = e.target.value;
  value = value.toUpperCase();
  e.target.value = value;
}
function changeSmallerCase(e) {
 console.log("smsll")
    var value = e.target.value;
  value = value.toLowerCase();
  e.target.value = value;
}

function changeBgColor() {
  var container = document.getElementById("test-container");
  container.style.backgroundColor = "red";
}
function changeBgColorToYellow() {
  var container = document.getElementById("test-container");
  container.style.backgroundColor = "yellow";
}


const btn = document.getElementsByTagName("button");
btn.addEventListener("click", () => {
    console.log("btn clicked")
})
console.log("btns", btn)