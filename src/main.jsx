import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { PropertyContextProvider } from "./context/PropertyContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <PropertyContextProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </PropertyContextProvider>
    </BrowserRouter>
  </StrictMode>
);
