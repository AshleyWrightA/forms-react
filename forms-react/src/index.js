import React from "react";
import ReactDOM from "react-dom/client";
import "./css/meyer-reset.css";
import "./css/index.css";
import "./css/splash.css";
import Splash from "./app/components/splash";
import Content from "./app/components/forms";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Splash />
    <Content />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
