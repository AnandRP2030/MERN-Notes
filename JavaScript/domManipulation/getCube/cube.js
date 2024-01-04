function getCube() {
  var number = document.getElementById("number").value;
  var output = number * number * number;
  alert(output);
}

function changeText(abcd) {
     console.log("id", abcd);
  abcd.innerHTML = "Ooops!";
}

