function checkMail() {
  const promise = new Promise((resolve, reject) => {

    let num = Math.random();
    
    if (num > 0.5) {
      resolve(`Mail has arrived ${num}`);
    } else {
      reject(`${num} Failed to arrive`);
    }
  });
  return promise;
}

checkMail()
  .then((mail) => {
    console.log(mail);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    console.log("Experiment completed");
  });

// promise
//   .then((res) => {
//     console.log("res", res);
//   })
//   .catch((err) => {
//     console.error(err);
//   })
//   .finally(() => {
//     console.log("finally");
//   });
