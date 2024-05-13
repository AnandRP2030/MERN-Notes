import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/login.jsx";
import { Signup } from "./components/signup.jsx";
import { Home } from "./components/home.jsx";
import { MyNavbar } from "./components/navbar.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/navbar" element={<MyNavbar />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={<h1> 404 </h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
