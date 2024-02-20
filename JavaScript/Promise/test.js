// async function sum() {
//   return "hello";
// }

// const res = sum();
// console.log(res);

// sum().then((res) => {
//   console.log("res", res);
// });

// async function getData() {
//   const fetchPromise = await fetch(
//     "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
//   );

//   console.log("inside getdata", fetchPromise);
// }
// getData();
// console.log("fetch promise", fetchPromise); // promise

// fetchPromise.then((response) => {
//   console.log(`Received response: ${response.status}`);
// });

// new
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // Change to false to simulate rejection
      if (success) {
        resolve("Data fetched successfully");
      } else {
        reject("Error fetching data");
      }
    }, 2000);
  });
};

async function fetchDataAsync() {
  try {
    const result = await fetchData();
    console.log("result", result);
  } catch (error) {
    console.error(error);
  }
}

fetchData()
  .then((res) => {
    console.log("res", res);
  })
  .catch((err) => {
    console.error(err);
  });

fetchDataAsync();
