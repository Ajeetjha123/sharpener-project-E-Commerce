import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import Context from "./Context";
import { AuthContextProvider } from "./context/auth-context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Context>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </Context>
  </React.StrictMode>
);
