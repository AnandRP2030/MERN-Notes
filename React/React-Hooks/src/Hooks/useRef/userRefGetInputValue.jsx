// 1. **Accessing DOM elements**: You can use `useRef` to get a reference to a DOM element and then 
// manipulate it directly. This is useful for scenarios like focusing an input field, animating elements,
// or measuring the size of an element.
import { useState, useRef } from "react";
export function GetInputValue() {
    const [count, setCount] = useState(0);
  const inputRef = useRef(null);
  const renderCount = useRef(0);
  const handleClick = () => {
    console.log(inputRef);
    alert(inputRef.current.value);
  };
  const focusInput = () => {
    inputRef.current.focus();
  }
  const incCount = () => {
    setCount(count => count + 1);
  }
  renderCount.current++;
  return (
    <div className="App">
      <h1> Hello {renderCount.current} </h1>
      <input ref={inputRef} type="text" />
      <br />
      <button onClick={handleClick}> show alert</button>
      <br />
      <br />
      <button onClick={focusInput}> focus input</button>
      <br />
      <br />
      <button onClick={incCount}> Increase count {count}</button>

    </div>
  );
}
