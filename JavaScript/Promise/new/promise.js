

const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  setTimeout(() => {
    const randomNumber = Math.random(); // 0.23847384734
    if (randomNumber > 0.5) {
      resolve(`Password is correct ${randomNumber}`); // Promise is fulfilled
    } else {
      reject("Number is too low " + randomNumber); // Promise is rejected
    }
  }, 1000);
});
// console.log("promise without resolve", myPromise);

// then catch / async await
myPromise
  .then((result) => {
    console.log("Promise fulfilled:", result);
    // dispalyData(result )
  })
  .catch((error) => {
    console.log("Promise rejected:", error);
    alert(error)
    // alert("Plea")
  });
