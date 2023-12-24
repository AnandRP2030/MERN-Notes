import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseMemoHook from "./Hooks/UseMemo/UseMemoHook.jsx";
import MyCustomHook from "./Hooks/customHooks/customHooks.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/use-memo" element={<UseMemoHook />} />
      <Route path="/custom-hook" element={<MyCustomHook />} />
    </Routes>
  </BrowserRouter>
);
