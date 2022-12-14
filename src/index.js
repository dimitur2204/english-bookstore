import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@mui/material";
import { deepmerge } from "@mui/utils";
import theme, { joyTheme, muiTheme } from "./theme";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import createRoutes from "./Routes";
import { CssVarsProvider } from "@mui/joy/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import BookContext from "./context/BookContext";

const router = createBrowserRouter(createRoutes(), {
  basename: "/english-bookstore",
});
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssVarsProvider theme={deepmerge(joyTheme, muiTheme)}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <BookContext>
            <RouterProvider router={router} />
          </BookContext>
        </LocalizationProvider>
      </CssVarsProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
