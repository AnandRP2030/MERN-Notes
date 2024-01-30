function getCube() {
  var number = document.getElementById("number").value;
  var output = number * number * number;
  alert(output);
}

function changeText(elem) {
  console.log("id", elem);
  elem.innerHTML = "Ooops!";
}
