import { useState, useEffect } from "react";
import React from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {


    fetchData();

    return () => {
      // Cleanup function
    };
  }, [url]);


  const fetchData = async () => {
    try {
      const response = await fetch(url);
      console.log("resp ", response);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  return { data, loading, error };
}

function FetchComponent() {
  const { data, loading: isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {/* Render data here */}
      <h1> Displaying data {data?.title}</h1>
    </div>
  );
}

export default FetchComponent;
