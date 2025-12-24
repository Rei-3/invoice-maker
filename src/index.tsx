import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter, Route } from "react-router";
import { Routes } from "react-router";
import { ThemeProvider } from "./components/theme-provider";

const rootEl = document.getElementById("root");
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  );
}
