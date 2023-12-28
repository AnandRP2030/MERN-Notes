var x = 1;
let y = 2;
const z = 3;
// z = 4;

window.onload = function () {
    
    console.log(z);
    console.log("Page loaded");
}


// Clock Timer Set Interval
function showWelcomeMsg () {
    var myHeading = document.getElementById("welcome-msg");
    // myHeading.innerText = "Welcome to my website";
    myHeading.innerHTML = new Date().toLocaleTimeString();
}
setInterval(showWelcomeMsg, 1000)



// setInterval(() => {
//     // console.log("im repeating after 1 secoond");
// }, 1000)