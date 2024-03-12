import { useState, useEffect } from "react";
const UseEffectHook = () => {
  const [count, setCount] = useState(2);
  const [newComp, setNewComp] = useState(false);



  useEffect(() => {
    console.log("Component mount");
  }, []);


  useEffect(() => {
    console.log("inside 2nd useffect, current count", count);
  }, [count]);


  const inc = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1> Use Effect Hook</h1>
      <h1> count : {count}</h1>
      <button onClick={inc}>Count: {count}</button>
      <br />
      <br />
      <button
        onClick={() => {
          setNewComp(true);
        }}
      >
        {" "}
        Show New Comp
      </button>
      <button
        onClick={() => {
          setNewComp(false);
        }}
      >
        {" "}
        Show Old Comp
      </button>
      {/* conditional rendering  */}
      {newComp ? <NewComponent /> : <OldComponent />}
    </div>
  );
};
export default UseEffectHook;

function OldComponent() {
  // using useEffect for handling unmount state.
  useEffect(() => {
    return () => {
      console.log("Old component unmounted.");
    };
  }, []);
  return (
    <div>
      <h1> Old Compoennt </h1>
    </div>
  );
}

function NewComponent() {
  useEffect(() => {
    return () => {
      console.log("New component unmounted.");
    };
  }, []);
  return (
    <div>
      <h1> New Component </h1>
    </div>
  );
}
