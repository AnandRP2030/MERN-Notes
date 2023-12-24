import { useState } from "react";

function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);
  const add = () => setCount((prevCount) => prevCount + 1);
  const sub = () => setCount((prevCount) => prevCount - 1);
  return [count, add, sub];
}

const MyCustomHook = () => {
  const [number, add, subtract] = useCounter(100);

  return (
    <>
      <h1> Count: {number}</h1>
      <button onClick={add}>Add </button>
      <button onClick={subtract}>sub </button>
    </>
  );
};
export default MyCustomHook;
