import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./redux/reducers/userReducers";
export const Login = () => {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(addUser(userName));
    setUserName("");
  };
  return (
    <>
      <div>
        <input
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          type="userName"
          value={userName}
          placeholder="Enter your name"
        />

        <button onClick={handleLogin}>Login</button>
      </div>
    </>
  );
};
