import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { mainTheme } from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
   <React.StrictMode>
      <BrowserRouter>
         <ThemeProvider theme={mainTheme}>
            <App />
         </ThemeProvider>
      </BrowserRouter>
   </React.StrictMode>
);
