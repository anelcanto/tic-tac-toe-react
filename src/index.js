import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./components/App";
import Header from "./components/Header";
import Footer from "./components/Footer";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Header/>
    <App />
    <Footer/>
  </StrictMode>
);