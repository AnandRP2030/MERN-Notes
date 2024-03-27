import "../../App.css";
import { useState, useMemo, useEffect } from "react";
import { baseValue } from "./sideEffectVariable.js";

// react components rerender whenerver a state or props change
const UseMemoHook = () => {
  const [number, setNumber] = useState(2);
  const [dark, setDark] = useState(true);

  // const doubledNumber = pureFunction(number);
  // const doubledNumber = pureFunction(number);
  
  const doubledNumber = useMemo(() => {

    return pureFunction(number);
  }, [number]);

  useEffect(() => {
    console.log("Component mount");
  }, []);
  // var value = useMemo(callbackFn, []);

  // var value = useMemo(callbackFn, []);
  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  return (
    // inline styling
    <div style={themeStyles}>
      <h1> Use memo hook</h1>
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        {" "}
        Change Theme{" "}
      </button>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(parseInt(e.target.value));
        }}
      />

      <div>Number: {doubledNumber}</div>
    </div>
  );
};
export default UseMemoHook;

// without use memo this function call everytime while this component re render.
function pureFunction(num) {

  console.time("slow");
  console.log("Inside pure function ");
  for (var i = 0; i < 500000000; i++) {}
  console.timeEnd("slow");
  return num * 2;
}

// javascript is a synchronous programming language
// memoization is a technique used to cache the results of expensive (time taking) function calls
// so that they can be reused in future
