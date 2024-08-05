const apiLink = "https://jsonplaceholder.typicode.com/posts/1";

async function getData() {
  try {
    const res = await fetch(apiLink);
    console.log("respo", res)
    const data = await res.json();
    console.log("data: =>", data);
  } catch (error) {
    console.log("Error on get data", error);
  }
}

// getData();


// const getData2 = async () => {
//   try {
//   } catch (error) {}
// };
