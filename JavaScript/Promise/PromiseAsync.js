const apiLink = "https://jsonplaceholder.typicode.com/posts";

// synchronous operation
function sum() {
  //
  //

  return 5 + 2;
}
let apiData = null;
let ans = sum();

// example of asynchronous operation
// // get request
// 5 Network requests
// get, post, put, patch, delete
// get => collect data from Db
// post => we pass data from client side
// put => Full update data (name, email, phonenumber, password)
// patch => Partial  data (phonenumber)
// delete =>

//
function getData() {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => {
      console.log("res", res);
      return res.json(); // async operation
    })
    .then((data) => {
      console.log("data", data);
      apiData = data;
    })
    .catch((err) => {
      console.log(err);
      if (err.response.status === 404) {
        alert("Your email or password is wrong.")
      }
    });
}

// async await 

// asynchronous function.

// async & await => try catch

// getData();

async function fetchData() {
  try {
    const response = await fetch(apiLink);
    console.log("response", response);
    const data = await response.json(); // time consuming operation
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
