import React from "react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { usePolyglot } from "polyglot-react-redux-sdk";

import theme from "Theme";
import config from "Config";

import content from "./content";
import AppRouter from "router";

function App() {
  const { phrasesLoaded } = usePolyglot({
    default: config.locale,
    defaultPhrases: content,
    useDefaultPhrases: true,
  });
  return (
    <ThemeProvider theme={theme}>
      {(phrasesLoaded && <AppRouter />) || ""}
    </ThemeProvider>
  );
}

App.whyDidYouRender = {
  logOnDifferentValues: true,
  customName: "App",
};
export default App;
