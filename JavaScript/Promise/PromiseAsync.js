const apiLink = "https://jsonplaceholder.typicode.com/posts";

function sum() {
  return 5 + 2;
}
let apiData = null;
let ans = sum();
// // get request
// function getData() {
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//  .then((res) => {
//       console.log("res", res);
//       return res.json();
//     })
//     .then((data) => {
//       console.log("data", data);
//       apiData = data;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// asynchronous function.

// async & await => try catch

// getData();

async function fetchData() {
  try {
    const response = await fetch(apiLink);
    console.log("response", response);
    const data = await response.json();
    console.log("data:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}


function execute() {
  console.log("Execute function started");
  fetchData();
  // Rest of the code
  console.log("Execute function Ended");
}

execute();
