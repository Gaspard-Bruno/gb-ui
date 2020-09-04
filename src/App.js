import React, { useEffect, useMemo } from "react";
import { ThemeProvider } from "styled-components";
import { usePolyglot } from "polyglot-react-redux-sdk";

import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'js-cookie'
import { actions as authActions, selectors as authSelectors } from './redux/reducers/auth'

import theme from "Theme";
import CONFIG from "Config";

import content from "./content";
import AppRouter from "router";

function App() {
  const dispatch = useDispatch();

  const { phrasesLoaded } = usePolyglot({
    default: CONFIG.locale,
    defaultPhrases: content,
    useDefaultPhrases: true
  });



  // useEffect(() => {
  //   if (Cookies.get('authorization-header-frontend')) {
  //     dispatch(authActions.me())
  //   }
  // }, [])

  // const meLoading = useSelector(authSelectors.getMeLoading)
  // const authenticated = useSelector(authSelectors.isAuthenticated)  

  // console.log(authenticated)

  // const appReady = useMemo(() => !meLoading, [meLoading])

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
