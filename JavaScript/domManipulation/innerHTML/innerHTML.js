var myDiv = document.getElementById("root");

function displayForm() {
  var data =
    "Name:<input type='text' name='name'><br>Comment:<br><textarea rows='5'cols='80'></textarea><br><input type='submit' value='Post Comment'>";

  myDiv.innerHTML = data;
}

function hideForm () {
    myDiv.innerHTML = "";
}

var h4Tag = document.getElementById("h4-tag");
function fillContent () {
    h4Tag.innerText = "Hello World";
}

function changeColor () {
    h4Tag.style.color = "red";
}
function changeBgColor () {

    h4Tag.style.backgroundColor = "yellow"
}