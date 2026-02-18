import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Toaster } from "sonner";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Toaster position="top-right" />
    <App />
  </BrowserRouter>
);
