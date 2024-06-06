import { useNavigate } from "react-router-dom";

import "./login.css";
import instance from "../../apis/instance";
import { useState } from "react";
import axios from "axios";
export const Login = () => {
  const navigate = useNavigate();
  function redirectToHome() {
    navigate("/");
  }
  const [email, setEmail] = useState("user3@gmail.com");
  const [password, setPassword] = useState("1234abcd");

  const submitForm = async () => {
    let obj = {email, password}
    try {
      const res = await axios.post("http://localhost:3443/user/signin", obj);
      let data = res.data;
      let token = data.accessToken;
      if (token) {
        localStorage.setItem("power-token", token);
        // alert("Login Successful");
        navigate('/')
      } else {
        console.log("Token not found");
      }
    } catch (error) {
      console.error("Error on login", error);
    }
  };

  return (
    <div>
      <div className="login-container">
        <div className="login-form">
          <h2>Login</h2>

          <div className="input-elements">
            <label for="">Email</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Enter Email"
            />

            <br />
            <label for="">Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Enter Email"
            />

            <div className="checkbox-container">
              <input type="checkbox" />
              <label for="">Show Password</label>
            </div>
          </div>

          <div className="btn-contaniner">
            <button onClick={submitForm}>Login </button>
          </div>

          <div className="btn-contaniner">
            <button onClick={redirectToHome}> Home </button>
          </div>

          <div className="bottom-items">
            <p>
              Forgot <a href="">Username/Password</a>
            </p>
            <p>
              Don't have an account <a href="">Signup</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
