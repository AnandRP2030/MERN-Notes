const apiLink = "https://jsonplaceholder.typicode.com/posts/1";

function getData() {
  fetch(apiLink)
    .then((res) => {
      console.log("res", res);
      return res.json();
    })
    .then((data) => {
      console.log("data", data);
    })
    .catch((err) => {
      console.log(err);
    });
}



getData();

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

// function execute() {
//   console.log("Execute function started");
//   fetchData();
//   // Rest of the code
//   console.log("Execute function Ended");
// }

// execute();
