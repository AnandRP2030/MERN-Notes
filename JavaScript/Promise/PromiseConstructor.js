const apiLink = "https://jsonplaceholder.typicode.com/posts/1";

const fetchDataPromise = new Promise(async (resolve, reject) => {
  try {
    const response = await fetch(apiLink);
    console.log("my respon", response);
    if (!response.ok) {
      // Check if the response status is not okay (e.g., 404 Not Found)
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("data", data);
    resolve(data);
  } catch (error) {
    reject(error);
  }
});

// Using the Promise
fetchDataPromise
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

async function getData() {
  const result = "some string";
  return result;
}
console.log(getData());
