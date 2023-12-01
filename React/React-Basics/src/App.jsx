import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AsyncAwait from "./Components/Async-Await/AsyncAwait";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1> Home Page </h1>} />
          <Route path="/async" element={<AsyncAwait />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
