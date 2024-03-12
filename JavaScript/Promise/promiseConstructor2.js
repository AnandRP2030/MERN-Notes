function checkMail() {
  const promise = new Promise((resolve, reject) => {

    let num = Math.random(); // 0. 23283423
   
    
    if (num > 0.5) {
      resolve(`Mail has arrived ${num}`);
    } else {
      reject(`${num} Failed to arrive`);
    }
  });
  return promise;
}

// async await

let output = checkMail();

// console.log("promise", output);


checkMail()
  .then((mail) => {
    // console.log(mail);
    console.log("mail", mail)
  })
  .catch((err) => {
    console.log("error => ",err);
  })
  .finally(() => {
    console.log("Experiment completed");
  });

  // async await 
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
