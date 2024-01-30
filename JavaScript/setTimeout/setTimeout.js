const timer = document.getElementById("timer");

setTimeout(() => {
  console.log("This execute after 2000 ms");
}, 2000);

let count = 1;
let intervalId;

function start() {
  intervalId = setInterval(() => {
    console.log(count);
    timer.innerHTML = count;
    count++;
  }, 1000);
}

const stopBtn = document.getElementById("stop-btn");

stopBtn.addEventListener("click", () => {
  clearInterval(intervalId);
});
