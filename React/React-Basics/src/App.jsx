import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AsyncAwait from "./Components/Async-Await/AsyncAwait";
import LocalStorageExample from "./Components/LocalStroage/LocalStroageComponet";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1> Home Page </h1>} />
          <Route path="/async" element={<AsyncAwait />} />
          <Route path="/ls" element={<LocalStorageExample />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
