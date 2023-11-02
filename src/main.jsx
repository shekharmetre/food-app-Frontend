import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "../store/index.js";
import { SocketProvider } from "../context/SocketProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SocketProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </SocketProvider>
);
