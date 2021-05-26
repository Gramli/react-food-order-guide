import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CartContextProviver } from "./context/cartContext";

ReactDOM.render(
  <React.StrictMode>
    <CartContextProviver>
      <App />
    </CartContextProviver>
  </React.StrictMode>,
  document.getElementById("root")
);
