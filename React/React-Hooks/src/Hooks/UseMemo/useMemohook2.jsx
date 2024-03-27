import { useState, useMemo, useEffect } from "react";

const UseMemoExample2 = () => {
  const [age, setAge] = useState(30);
  const [wealth, setWelath] = useState(300);
  const [name, setName] = useState("abc")
  // console.log("tax calculated before");
  // const tax = wealth * 0.3;
  // console.log("tax calculated after");
// 
  const tax = useMemo(() => {
    console.log("inside tax calculation");
    
    return wealth * 0.3;
  }, [wealth]);


  return (
    <div>
      <h1>Use Memo Hook</h1>
      <h2>Age: {age}</h2>
      <h2>Wealth: {wealth} </h2>
      <h3>Tax: {tax}</h3>

      <button onClick={() => setAge((age) => age + 1)}> Change Age </button>
      <button onClick={() => setWelath((wealth) => wealth + 1)}>
        {" "}
        Change Wealth{" "}
      </button>
    </div>
  );
};
export default UseMemoExample2;
