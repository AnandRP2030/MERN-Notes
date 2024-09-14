import { useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import MainContainer from "./propsDrillingExample/mainContainer";
function App() {
  const [count, setCount] = useState(0);
  const text = "hello";
  return (
    <>
      <h1> Context API</h1>
      <Login />
      {/* <Profile /> */}
      {/* <MainContainer text={text}/> */}
    </>
  );
}

export default App;
