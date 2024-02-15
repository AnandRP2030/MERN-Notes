import { useState, useRef } from "react";

const UseRefHook = () => {
  const ref = useRef(0);
  const handleClick = () => {
    ref.current = ref.current + 1;
    console.log("You clicked ", ref.current, " times");
  };
  return (
    <div>
      <h1> use ref hook</h1>
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
    clearInterval(intervalRef.current);
  };
  return (
    <div>
      <h1>StopWatch</h1>
      <h1> Timer:{secondPassed} Show timer</h1>
      <button onClick={handleStart}>Start</button>
      <br />
      <button onClick={handleStop}>STop</button>
    </div>
  );
};
