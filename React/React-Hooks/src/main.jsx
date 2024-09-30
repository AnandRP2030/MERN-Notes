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
import UseMemoExample2 from "./Hooks/UseMemo/useMemohook2.jsx";
import UseRef2 from "./Hooks/useRef/useRef2.jsx";
import FetchComponent from "./Hooks/customHooks/useFetch.jsx";
import { GetInputValue } from "./Hooks/useRef/userRefGetInputValue.jsx";
import { StrictMode } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { RefreshFrequently } from "./Hooks/customHooks/new-examples/useRefreshing.jsx";
import OnlineStatusComponent from "./Hooks/customHooks/new-examples/checkOnline.jsx";
import { MousePositionComponent } from "./Hooks/customHooks/new-examples/showMousePosition.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/use-state" element={<UseStateHook />} />
        <Route path="/use-effect" element={<UseEffectHook />} />
        <Route path="/use-ref2" element={<UseRef2 />} />
        <Route path="/use-ref1" element={<GetInputValue />} />
        <Route path="/use-ref" element={<UseRefHook />} />
        <Route path="/use-memo" element={<UseMemoHook />} />
        <Route path="/use-memo2" element={<UseMemoExample2 />} />

        {/* custom hooks  */}
        <Route path="/custom-hook" element={<MyCustomHook />} />
        <Route path="/custom-hook2" element={<FetchComponent />} />
        <Route path="/use-refresh" element={<RefreshFrequently />} />
        <Route path="/use-online-status" element={<OnlineStatusComponent />} />
        <Route path="/use-mouse-position" element={<MousePositionComponent />} />
      </Routes>
    </BrowserRouter>
  // </StrictMode>
);
