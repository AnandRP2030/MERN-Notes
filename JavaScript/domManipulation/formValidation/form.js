const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("form submitted")

    const passwordElem = document.querySelector("#password");
    const password = passwordElem.value;
    console.log("passwor", password)
    if (password.length < 6) {
        const passwordWarningmsg = document.querySelector(".password-warning-msg");
        console.log(passwordWarningmsg)
        passwordWarningmsg.innerText = "password should be more than 5 characters";
        passwordWarningmsg.style.color = "red";
        passwordWarningmsg.style.fontWeight = 600;
        passwordWarningmsg.style.fontSize = "30px";
        

    }

})