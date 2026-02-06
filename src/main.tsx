// import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Providers } from "./providers";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
     <Providers>
      <App />
    </Providers>
  ,// strict mode to run code two types first time check and secound time run orizonal
);