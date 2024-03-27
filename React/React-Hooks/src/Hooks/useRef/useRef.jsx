import { useState, useRef } from "react";

const UseRefHook = () => {
  const [count, setCount] = useState(0);
  const ref = useRef(0);
  const handleClick = () => {
    ref.current = ref.current + 1;
    console.log("You clicked ", ref.current, " times");
  };
  return (
    <div>
      <h1> use ref hook {ref.current} </h1>
      <h2>
        {" "}
        useRef is a React Hook that lets you reference a value that’s not needed
        for rendering.
      </h2>

      <button onClick={handleClick}>Count Click</button>

      <h1>-------------------------------------------------------------</h1>

      <StopWatch />
    </div>
  );
};

export default UseRefHook;

const StopWatch = () => {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);
  let secondPassed = 0;
  console.log(intervalRef, "interval ref");

  if (startTime != null && now != null) {
    secondPassed = (now - startTime) / 1000;
  }

  const handleStart = () => {
    setStartTime(Date.now());
    setNow(Date.now());
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };
  const handleStop = () => {
    console.log("interval ref", intervalRef.current);
    clearInterval(intervalRef.current);
  };

  const inputRef = useRef(null);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("input ref", inputRef);
    // Accessing input field value using inputRef.current.value
    alert("Input value: " + inputRef.current.value);
  };
  return (
    <div>
      <h1>StopWatch</h1>
      <h1> Timer:{secondPassed} Show timer</h1>
      <button onClick={handleStart}>Start</button>
      <br />
      <button onClick={handleStop}>STop</button>

      <form onSubmit={handleSubmit}>
        <label>
          Input:
          {/* Assigning the ref to the input element */}
          <input type="text" ref={inputRef} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
