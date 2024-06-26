import React from "react";
import { useState, useContext } from "react";
import UserContext from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {  updateUserValue } = useContext(UserContext);
  // useContext hook

  const navigate = useNavigate();
  const redirectProfile = () => {
    navigate("/profile");
  };
  const handleLogin = (e) => {
    e.preventDefault();

// Login Logic


     updateUserValue(username);
    redirectProfile();
  };
  return (
    <div>
      <h1> Login </h1>
      <form>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <input type="submit" value="Login" onClick={handleLogin} />

        <br />
        <button onClick={redirectProfile}> Redirect To Profile page</button>
      </form>
    </div>
  );
}
