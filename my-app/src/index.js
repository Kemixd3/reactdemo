import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import Account from "./UserPage";

function App() {
  return (
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/user" element={<Account />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
