import { createGlobalStyle } from "styled-components";

import "./fonts.css";

export default {
  margin: 16,
  heroSize: 680,
  maxWidth: 1152,
  boxShadow: "0 0 3rem #333",
  //──── Colors ────────────────────────────────────────────────────────────────────────────
  colors: {
    darkBlue: "#171F46",
    grey: "#88827C",
    mediumBeige: "#D2CCC6",
    lightBeige: "#F3E9E1",
    lightestBeige: "#F8F7F7",
    white: "#FFF",
    brand: {
      yellow: "#FEC35A",
      hover: "#FECE7B",
      lighter: "#FED58B",
      darker: "#FDAA15",
      orange: "#F0513A",
      orangeLight: " #F37C6B",
      orangeDarker: "#DD2A10",
      blue: "#5CB5E6",
      lightBlue: "#C5E8F2",
      red: "#DB1E3B"
    },
    feedback: {
      success: {
        default: "#2DCA73",
        hover: "#57D48F",
        background: "#EAF9F1"
      },
      error: {
        default: "#DB1E3B",
        hover: "#E24B61",
        background: "#FBE8EB"
      },
      warning: {
        default: "#FEC35A",
        hover: "#FECE7B",
        background: "#FEF8EE"
      }
    },
    muted: {
      red: "#F1A5B1",
      orange: "#F9B9B0",
      yellow: "#FFE7BD",
      blue: "#BEE1F5",
      lightBlue: "#E8F6FA",
      green: "#ABEAC7",
      purple: "#CBABEA"
    }
  }
};

export const GlobalStyles = createGlobalStyle`
    html {
      scroll-behavior: smooth;
    }
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
`;
