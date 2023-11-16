import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";
import { FacebookProvider } from "react-facebook";
import { BrowserRouter } from "react-router-dom";
 ReactDOM.createRoot(document.getElementById("root")).render(
  <ClerkProvider publishableKey={import.meta.env.VITE_APP_CLERK_PUBLISHABLE_KEY} >
   <BrowserRouter>
    <App />
  </BrowserRouter>
   </ClerkProvider>
);
