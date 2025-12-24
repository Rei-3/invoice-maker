import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter, Route } from "react-router";
import { Routes } from "react-router";
import { ThemeProvider } from "./components/theme-provider";
import LoginPage from "./pages/auth/login-page";
import SignUpPage from "./pages/auth/sign-up-page";

const rootEl = document.getElementById("root");
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="*" element={<div>404 Not Found</div>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  );
}
