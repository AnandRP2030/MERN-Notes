var heading = document.getElementById("heading");

function changeContent() {
    heading.innerText = "New Title";
}

var boxes = document.getElementsByClassName("box");
function updateBox1Content () {
    boxes[0].innerHTML = "<h1> Box 1 updated </h1>";
}
console.log("boxes", boxes)

var images = document.getElementsByTagName("img");
console.log("images", images)


var genders = document.getElementsByName("gender");
console.log("genders", genders)

