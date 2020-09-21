import React from "react";
import { ThemeProvider } from "styled-components";
import { usePolyglot } from "polyglot-react-redux-sdk";

import theme from "Theme";
import CONFIG from "Config";

import content from "./content";
import AppRouter from "router";

function App() {
  const { phrasesLoaded } = usePolyglot({
    default: CONFIG.locale,
    defaultPhrases: content,
    useDefaultPhrases: true
  });

  return (

      <ThemeProvider theme={theme}>
        {(phrasesLoaded && <AppRouter />) || ""}
      </ThemeProvider>

  );
}

App.whyDidYouRender = {
  logOnDifferentValues: true,
  customName: "App"
};
export default App;
