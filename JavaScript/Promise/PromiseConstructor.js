const apiLink = "https://jsonplaceholder.typicode.com/posts/1";
function getData () {
  const fetchDataPromise = new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(apiLink);
      console.log("my respon", response);
      if (response.status === 200) {
        resolve(response);
      }else {
        reject("Error")
      }
  
      const data = await response.json();
      
      resolve(data);
      
    }
  });

  return fetchDataPromise;
}



// Using the Promise
getData()
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// async function getData() {
//   const result = "some string";
//   return result;
// }
// console.log(getData());
