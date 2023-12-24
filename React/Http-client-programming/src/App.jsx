import { useState } from "react";
import axios from "axios"; // third party library
function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  const API_LINK = "https://jsonplaceholder.typicode.com/todos/1";
  const POST_API_LINK = "https://jsonplaceholder.typicode.com/posts";
  async function getData() {
    try {
      const response = await fetch(API_LINK);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      console.log("Request completed");
      alert("Data retrieved successfully")
    }
  }

  const getDataUsingAxios = async () => {
    try {
      const response = await axios.get(API_LINK);
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const postData = async (newData) => {
    try {
      const response = await fetch(POST_API_LINK, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      setData(data);
      // Handle the response data as needed
    } catch (error) {
      console.error(error);
      // Handle errors
    }
  };


  if (error) {
    return <h1> Error</h1>;
  }
  return (
    <>
      <h1> Http Client programming</h1>
      <button onClick={getData}> Get Data </button>
      <button
        onClick={() => {
          postData({
            title: "New Title",
          });
        }}
      >
        {" "}
        Post Data{" "}
      </button>
      {data && (
        <h1>
          {" "}
          Title: {data.title}{" "}
        </h1>
      )}
    </>
  );
}

export default App;
