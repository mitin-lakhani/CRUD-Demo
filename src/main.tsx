import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Providers } from "./providers";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
     <Providers>
      <App />
     
    </Providers>
    </ThemeProvider>
  </React.StrictMode>
  ,
 
  
  // strict mode to run code two types first time check and secound time run orizonal
);
