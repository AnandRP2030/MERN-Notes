// synchornous language
// asynchronous operations
function largeTimeTakingFn () {
    
    for (let i = 0; i < 100000; i++) {

    }
    console.log("done");
}


var count = 1;

const id = setInterval(() => {
    const h1 = document.getElementById("timer");
    h1.innerHTML = count++;
}, 1000)

setTimeout(() => {

    const h1 = document.getElementById("demo");
    h1.innerHTML = "Welcome to my website";
    largeTimeTakingFn()
    
    clearInterval(id);
}, 10000)
