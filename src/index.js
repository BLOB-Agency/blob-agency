import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import "./index.scss";
import About from "./Pages/About";
import Expertise from "./Pages/Expertise";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Home />
    <Portfolio />
    <About />
    <Expertise />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
