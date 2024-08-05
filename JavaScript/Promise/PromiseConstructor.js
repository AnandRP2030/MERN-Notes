const apiLink = "https://jsonplaceholder.typicode.com/posts/1";
function getData() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(apiLink);
      const data = await response.json();
      if (response.status === 200) {
        resolve(data);
      }
    } catch (error) {
      reject(error);
    }
  });
}

console.log(getData());

// Using the Promise
getData()
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// async function collectData() {
//   let data = await getData();
//   console.log("dataasync", data);
// }

// collectData();
// async function getData() {
//   const result = "some string";
//   return result;
// }
// console.log(getData());
