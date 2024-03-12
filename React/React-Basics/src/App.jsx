import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AsyncAwait from "./Components/Async-Await/AsyncAwait";
import LocalStorageExample from "./Components/LocalStroage/LocalStroageComponet";
import Home from "./test/home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1> Home Page </h1>} />
          <Route path="/admin/login" element={<h1> Home Page </h1>} />
          <Route path="/admin/dashboard" element={<h1> Home Page </h1>} />
          <Route path="/profile" element={<h1> Profile page </h1>} />
          <Route path="/async" element={<AsyncAwait />} />
          <Route path="/ls" element={<LocalStorageExample />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
