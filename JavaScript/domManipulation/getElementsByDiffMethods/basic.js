function changeH1 () {
  let h1 = document.getElementById("empty-h1");
  console.log("h1", h1);
  h1.innerHTML = "<img src='https://picsum.photos/200' alt='pic' />"; 
}
var heading = document.getElementById("heading"); // single element

function changeContent() {
  heading.innerText = "<img src='https://picsum.photos/200' alt='pic' />";
  heading.style.color = "red";
  heading.style.backgroundColor = "yellow";
  heading.style.fontSize = "50px";
  heading.style.textAlign = "center";
}

var boxes = document.getElementsByClassName("box");
console.log("boxes", boxes);
function updateBox1Content() {
  boxes[0].innerHTML = "<h1> Box 1 updated </h1>";
}
console.log("boxes", boxes);

function changeImg() {
  var images = document.getElementsByTagName("img");
  console.log("images", images);
  images[0].src =
    "https://media.istockphoto.com/id/1152537185/photo/hacker-working-on-laptop-in-the-dark.webp?s=1024x1024&w=is&k=20&c=XfH6Pl4y4Pm1KHbWNXuxmdUfmWdxPIC7ZeUXjwiaEzY=";
}
function changeImg2 () {
  let img24 = document.getElementById("myImg");
  img24.src = "https://media.istockphoto.com/id/1152537185/photo/hacker-working-on-laptop-in-the-dark.webp?s=1024x1024&w=is&k=20&c=XfH6Pl4y4Pm1KHbWNXuxmdUfmWdxPIC7ZeUXjwiaEzY="
}

var genders = document.getElementsByName("gender");
console.log("all genders", genders);

function showGender(e) {
  console.log("events", e);
  console.log("selected genders", e.target.value);
}

function submitForm(e) {
  e.preventDefault();
  console.log("submit form", e);
}

function docWriteLn() {
  document.writeln("<h1> document.writeln() method is executed");
}

function docWrite() {
  document.write("<h1> docuemnt.write() method is executed </h1>");
}
