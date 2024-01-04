// var myDiv = document.getElementById("root");

// function displayForm() {
//   var data =
//     "Name:<input type='text' name='name'><br>Comment:<br><textarea rows='5'cols='80'></textarea><br><input type='submit' value='Post Comment'>";

//   myDiv.innerHTML = data;
// }

// function hideForm () {
//     myDiv.innerHTML = "";
// }



// function changeColor () {
//     h4Tag.style.color = "red";
// }
// function changeBgColor () {

//     h4Tag.style.backgroundColor = "yellow"
// }








function fillContent () {
  var h4Tag = document.getElementById("h4-tag");
  h4Tag.innerText = "Hello World";
}


function showName() {
  var nameTag = document.getElementById("name-tag");
  nameTag.innerText = "Nithin";
}


function changeColor () {
  var nameTag = document.getElementById("name-tag");
  nameTag.style.color = "red";
}

function addImageToBox () {
  var box = document.getElementById("box");
  box.innerHTML = "<img src='https://picsum.photos/200' alt='pic' />";
}

function removeImgFromBox () {
  var box = document.getElementById("box");
  box.innerHTML = "<h1>Box 1</h1>";
}

function changeBgColor() {
  var box = document.getElementById("box");
  box.style.backgroundColor = "red";
}

function changeBodyBackground () {
  var body = document.getElementById("body");
  body.style.backgroundColor = "red"
}