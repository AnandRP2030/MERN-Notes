import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StudentLogin } from "./components/studentLogin/login.jsx";
import { StudentSignup } from "./components/studentSignup/signup.jsx";

import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/student/signup" element={<StudentSignup />} />
        <Route path="/student/login" element={<StudentLogin />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
