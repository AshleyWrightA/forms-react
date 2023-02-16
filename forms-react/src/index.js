import React from "react";
import ReactDOM from "react-dom/client";
import "./css/meyer-reset.css";
import "./css/index.css";
import "./css/splash.css";
import "./css/content.css";
import Splash from "./app/components/splash";
import Content from "./app/components/forms";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Splash />
    <Content />
  </React.StrictMode>
);
