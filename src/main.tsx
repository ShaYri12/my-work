import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToastContainer
      position="top-center"
      autoClose={2000}
      pauseOnHover={true}
      closeOnClick={true}
      draggable={true}
    />
    <App />
  </StrictMode>
);
