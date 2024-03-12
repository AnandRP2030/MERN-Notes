import { useState } from "react";
import { ShowHistory } from "./showHistory.jsx";
import Navbar from "./Navbar.jsx";
function Home() {
  const [bal, setBal] = useState(0);
  const [add, setAdd] = useState(0);
  const [withdraw, setWithdraw] = useState(0);
  const [statement, setStatement] = useState([]);

  function AddFunction(e) {
    let x = Number(e.target.value);
    console.log("x", typeof x);
    setAdd(x);
  }
  function withdrawFunction(e) {
    setWithdraw(e.target.value);
  }
  function Add() {
    if (add > 0) {
      console.log("bal typ", typeof bal);
      console.log("bal typ", typeof add);
      let b = bal + add;

      let msg = `User Added ${add} and balance is ${b}`;
      setStatement([...statement, msg]);

      console.log(b);
      setBal(bal + add);
      setAdd(0);
    }
  }
  function Withdraw() {
    if (withdraw > 0 && withdraw <= bal) {
      setBal(bal - withdraw);

      setWithdraw("");
    }
  }
  return (
    <div>
      <>
        <Navbar />
        numb
        <p>Current balance:{bal}</p>
        <input type="number" value={add} onChange={AddFunction}></input>
        <button onClick={Add}>Add</button>
        <input
          type="number"
          value={withdraw}
          onChange={withdrawFunction}
        ></input>
        <button onClick={Withdraw}>Withdraw</button>
      </>

      <ShowHistory statement={statement} />
    </div>
  );
}

export default Home;
