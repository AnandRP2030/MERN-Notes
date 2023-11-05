var display = document.getElementById("display");
var balancStatus = document.getElementById('balance-h1');
// balancStatus.innerText = "Your Balance is Zero"
function deposit () {
    var balance = document.getElementById("display").value;
    var amount = document.getElementById("enter-amount").value;
    var totalAmount = parseFloat(balance) + parseFloat(amount);
    display.value = totalAmount;
}

function withdraw () {
    if (totalAmount === 0) {
        balancStatus.innerText = "Your Balance is Zero";
        return;
    }
    var balance = document.getElementById("display").value;
    var amount = document.getElementById("enter-amount").value;
    var totalAmount = parseFloat(balance) - parseFloat(amount);
    if (totalAmount < 0) {
        balancStatus.innerText = "Insufficient Balance";
        return;
    }
    display.value = totalAmount;
}