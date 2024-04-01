import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AdminLogin from "./componets/admin/adminLogin.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import AdminDashboard from "./componets/admin/adminDashboard.jsx";
import Profile from "./20/profile.jsx";
import { ProductList } from "./productList.jsx";
import { UserDetails } from "./productDetails.jsx";
import Login from "./20/login.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile/" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/userDetails/:id" element={<UserDetails />} />
        <Route path="/*" element={<h1> 404 </h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
