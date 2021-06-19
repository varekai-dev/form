import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import ContextProvider from "./components/Context/Context";

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
