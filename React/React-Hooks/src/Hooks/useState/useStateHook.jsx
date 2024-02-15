import { useState } from "react";
const UseStateHook = () => {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1> Use state Hook</h1>
      <h1> Count: {count}</h1>
      <button onClick={increase}>Add</button>
      <button onClick={decrease}>Subtract</button>
    </div>
  );
};
export default UseStateHook;
