import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const ProductList = () => {
  const navigate = useNavigate();
  const [users, setToods] = useState([]);
  useEffect(() => {
    getusers();
  }, []);

  function redirectUserDetials(id) {
    navigate("/userDetails/" + id);
  }
  const getusers = async () => {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users");

      setToods(res.data);
    } catch (error) {
      console.log("Error", error);
    }
  };
  return (
    <div>
      <h1> Products</h1>
      {users.length === 0 && <h1> Data loading..</h1>}
      {users.map((user, index) => {
        console.log("user", user);
        return (
          <div key={index}>
            <h1>Name: {user.name} </h1>
            <h1>Number: {user.phone} </h1>
            <button
              onClick={() => {
                redirectUserDetials(user.id);
              }}
            >
              View{" "}
            </button>
          </div>
        );
      })}
    </div>
  );
};
