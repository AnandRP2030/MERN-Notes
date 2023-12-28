function onload () {
    alert ("Welcome to event listeners")
}

function upperCase(e) {
    var value = e.target.value;
    value = value.toUpperCase();
    e.target.value = value;
}

function changeBgColor () {
    var container = document.getElementById("test-container");
    container.style.backgroundColor = "red";
}
function changeBgColorToYellow () {
    var container = document.getElementById("test-container");
    container.style.backgroundColor = "yellow"
}