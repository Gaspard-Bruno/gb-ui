import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "Theme";
import AppRouter from "./router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
