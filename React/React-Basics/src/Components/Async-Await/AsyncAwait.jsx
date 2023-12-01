import React from "react";
import { useState } from "react";

export default function AsyncAwaitExample() {
  const [data, setData] = useState(null);

  const apiLink = "https://jsonplaceholder.typicode.com/posts/1";
  async function fetchData() {
    try {
      const response = await fetch(apiLink);
      console.log("response", response);
      const data = await response.json();
      console.log("data:", data);
      setData(data);
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

  return (
    <div>
      <h1> Async Functions</h1>
      <button onClick={execute}> Fetch Data</button>
      <h2>{data && data.title}</h2>
      <h2>{data && data.body}</h2>
    </div>
  );
}
