import "./App.css";
import { Login } from "./login.jsx";
import { useSelector } from "react-redux";

function App() {
  const st = useSelector((state) => state);
  const name = useSelector((state) => state.user.name);
  console.log("st", st);
  
  console.log("data", name);
  return (
    <>
      <div>
        <h1> Hello {name} </h1>
      </div>

      <h1> Login Page </h1>

      <Login />
    </>
  );
}

export default App;
