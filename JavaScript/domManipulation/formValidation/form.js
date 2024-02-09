const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("form submitted");

  const passwordElem = document.querySelector("#password");
  console.log(passwordElem, "elem");
  const password = passwordElem.value;
  console.log("passwor", password);
  if (password.length < 6) {
    const passwordWarningmsg = document.querySelector(".password-warning-msg");
    console.log(passwordWarningmsg);
    passwordWarningmsg.innerText = "password should be more than 5 characters";
    passwordWarningmsg.style.color = "red";
    passwordWarningmsg.style.fontWeight = 600;
    passwordWarningmsg.style.fontSize = "30px";
  }
});

const img = document.querySelector("img");
function changeImg() {
  img.src =
    "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D";
  img.style.width = "200px";
  img.style.height = "200px";
}

img.addEventListener("click", changeImg);
