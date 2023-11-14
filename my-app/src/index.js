import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import Nav from "./Nav";
import UserPage from "./UserPage";

function App() {
  return (
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
