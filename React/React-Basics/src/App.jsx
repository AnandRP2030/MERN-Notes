import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1> Home Page </h1>} />
          <Route path="/pure-components" element={<h1> Home Page </h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
