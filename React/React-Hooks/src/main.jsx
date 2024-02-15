import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseMemoHook from "./Hooks/UseMemo/UseMemoHook.jsx";
import MyCustomHook from "./Hooks/customHooks/customHooks.jsx";
import UseStateHook from "./Hooks/useState/useStateHook.jsx";
import UseEffectHook from "./Hooks/useEffect/useEffect.jsx";
import UseRefHook from "./Hooks/useRef/useRef.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/use-state" element={<UseStateHook />} />
      <Route path="/use-effect" element={<UseEffectHook />} />
      <Route path="/use-ref" element={<UseRefHook />} />
      <Route path="/use-memo" element={<UseMemoHook />} />
      <Route path="/custom-hook" element={<MyCustomHook />} />
    </Routes>
  </BrowserRouter>
);
