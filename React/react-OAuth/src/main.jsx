import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./profile.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="52206695815-vn1s12c86mqoo184iov9750be8i29c6c.apps.googleusercontent.com">
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  </GoogleOAuthProvider>
);
