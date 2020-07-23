import { createGlobalStyle } from "styled-components";

import SpaceGrotesk from "Assets/fonts/SpaceGrotesk-Regular.ttf";
import SpaceGroteskBold from "Assets/fonts/SpaceGrotesk-Bold.ttf";
import MuliRegular from "Assets/fonts/Muli.ttf";
import MuliBold from "Assets/fonts/Muli-Bold.ttf";

export default {
  margin: 12,
  heroSize: 680,
  maxWidth: 1152,
  boxShadow: "0 0 3rem #333",
  //──── Colors ────────────────────────────────────────────────────────────────────────────
  colors: {
    darkBlue: "#171F46",
    grey: "#88827C",
    mediumBeige: "#D2CCC6",
    lightBeige: "#F3E9E1",
    white: "#FFF",
    main: {
      yellow: "#FEC35A",
      hover: "#FECE7B",
      lighter: "#FED58B",
      darker: "#FDAA15"
    },
    accent: {
      red: "#DB1E3B",
      orange: "#F0513A",
      orangeLight: " #F37C6B",
      orangeDark: "#DD2A10",
      blue: "#5CB5E6",
      lightBlue: "#C5E8F2"
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
    @font-face {
        font-family: Space Grotesk;
        src: local('Space Grotesk'), local('SpaceGrotesk'),
        url(${SpaceGroteskBold}) format('truetype');
        font-weight: bold;
        font-style: bold;
    }

    @font-face {
        font-family: Space Grotesk;
        src: local('Space Grotesk'), local('SpaceGrotesk'),
        url(${SpaceGrotesk}) format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
      font-family: Muli;
      src: url(${MuliRegular}) format("truetype");
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: Muli;
      src: url(${MuliBold}) format("truetype");
      font-weight: bold;
      font-style: bold;
    }
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
