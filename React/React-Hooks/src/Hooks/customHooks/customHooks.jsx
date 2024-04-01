import { useEffect, useState } from "react";
import axios from "axios";

function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);
  const [data, setData] = useState(null);

  useEffect(() => {
    getDataFromApi();
  }, []);
  async function getDataFromApi() {
    let res = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
    console.log("res", res);
    setData(res.data);
  }
  console.log(count); // 100
  const add = () => setCount((prevCount) => prevCount + 1);
  const sub = () => setCount((prevCount) => prevCount - 1);
  const showAlert = () => {
    alert("Welcome" + count);
  };

  return [count, add, sub, showAlert, data];
}

const MyCustomHook = () => {
  const [number, add, subtract, popup, data] = useCounter(100);
  const [myCount, addition, sub] = useCounter(20);

  return (
    <>
      <h1> Count: {number}</h1>
      <button onClick={add}>Add </button>
      <button onClick={subtract}>sub </button>
      <button onClick={popup}>Pop </button>

      <h1> {data?.title} </h1>
    </>
  );
};
export default MyCustomHook;
