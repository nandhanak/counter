import React from "react";
import ReactDOM from "react-dom";
import App from "./App";


const rootElement = document.getElementById("root");

const Root = ReactDOM.createRoot(rootElement);
Root.render(
  <React.StrictMode>
  <App/>
  </React.StrictMode>,
);