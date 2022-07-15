import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import AddBoard from "./components/AddBoard";

const root = ReactDOM.createRoot(document.getElementById("root"));

const appElement = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={appElement}></Route>
    </Routes>
  </BrowserRouter>
);
