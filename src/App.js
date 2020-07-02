import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "Theme";
import AppRouter from "./router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppRouter />
      </div>
    </ThemeProvider>
  );
}

export default App;
