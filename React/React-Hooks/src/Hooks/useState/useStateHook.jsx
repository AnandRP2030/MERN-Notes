import { useState, useEffect } from "react";
function UseStateHook() {
  const [count, setCount] = useState(10); // hook
  const [name, setName] = useState("Vignesh");

  const [welcomeMessage, setWelcomeMessage] = useState("Welcome");

  function showAlertMsg() {
    alert(welcomeMessage);
  }

  useEffect(showAlertMsg, []);

  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  function changeName() {
    setName("Anand");
  }
  return (
    <div>
      <h1> Use state Hook</h1>
      <h1> Count: {count}</h1>
      <button onClick={increase}>Add</button>
      <button onClick={decrease}>Subtract</button>

      <h1> {name}</h1>

      <button onClick={changeName}> Change Name </button>
    </div>
  );
}
export default UseStateHook;
