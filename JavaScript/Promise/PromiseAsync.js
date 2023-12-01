const apiLink = "https://jsonplaceholder.typicode.com/posts/1";
async function fetchData() {
  try {
    const response = await fetch(apiLink);
    console.log("response", response);
    const data = await response.json();
    console.log("data:", data);
    console.log("response ", response);
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
