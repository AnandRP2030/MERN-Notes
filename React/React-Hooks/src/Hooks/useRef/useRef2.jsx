import { useRef, useState } from "react";
const UseRef2 = () => {
  const inputRef = useRef(null);
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  function logValue() {
    if (inputRef.current) {
      console.log(inputRef, "==input ref");
      console.log(inputRef.current, "==curent");
      console.log(inputRef.current.value, "value");
    }
  }
  console.log(count);
  return (
    <>
      <div>
        <h1> Use Ref Example</h1>

        <input type="text" ref={inputRef} />
        <button onClick={logValue}>Show Alert </button>

        <h1> Count: {count} </h1>
        <button
          onClick={() => {
            intervalRef.current = setInterval(() => {
              setCount((count) => count + 1);
            }, 1000);
          }}
        >
          {" "}
          Start Timer
        </button>
        <button
          onClick={() => {
            clearInterval(intervalRef.current);
            setCount(0);
          }}
        >
          {" "}
          Stop Timer
        </button>
      </div>
    </>
  );
};
export default UseRef2;
