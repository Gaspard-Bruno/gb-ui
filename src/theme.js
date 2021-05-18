import { createGlobalStyle } from 'styled-components';

import './fonts.css';

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

const GLOBAL = {
  margin: 16,
  boxShadow: () => 'box-shadow: 0 0 3rem #333;',
  borderRadius: radius => `border-radius:${radius};`,
  shadowE01: () => `filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.05));`,
  shadowE02: () => `drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.15));`,
  colors: {
    gray900: '#110F19',
    gray800: '#191A25',
    gray700: '#262633',
    gray600: '#31303E',
    white900: '#FFFEFD',
    white800: '#FAF9F6',
    white700: '#F5F4F1',
    white600: '#EAE8E3'
  }
};

export const DARK = {
  ...GLOBAL,
  colors: {
    ...GLOBAL.colors,
    main: '#A3A1FF',
    mainGradient: `linear-gradient(180deg, rgba(97, 141, 255, 0.4) 0%, rgba(123, 97, 255, 0.2) 100%)`,
    logoBorders: '#E9EFF6',
    typoPrimary: '#ffffff',
    typoSecondary: '#C9C7C4',
    typoInverse: '#000000',
    gradient900:
      'linear-gradient(180deg, #110F19 10.84%, rgba(17, 15, 25, 0) 59.6%)',
    gradient800:
      'linear-gradient(180deg, #191A25 10.84%, rgba(25, 26, 37, 0) 59.6%)',
    gradient700:
      'linear-gradient(180deg, #262633 10.84%, rgba(38, 38, 51, 0) 59.6%)',
    gradient600:
      'linear-gradient(180deg, #31303E 10.84%, rgba(49, 48, 62, 0) 59.6%)',
    glass: 'rgba(25, 26, 37, 0.9)',
    backdrop: 'rgba(17, 15, 25, 0.7)',
    feedback: {
      positive: '#AFE4AA',
      positiveTint: '#1F352C',
      positiveTint2: 'rgba(31, 53, 44, 0.4)',
      negative: '#FF9C8E',
      negativeTint: '#864037',
      negativeTint2: 'rgba(134, 64, 55, 0.4)',
      warning: '#F3BD83',
      warningTint: '#935D04',
      warningTint2: 'rgba(147, 93, 4, 0.4)'
    },
    surfaces: {
      900: GLOBAL.colors.gray900,
      800: GLOBAL.colors.gray800,
      700: GLOBAL.colors.gray700,
      600: GLOBAL.colors.gray600
    }
  }
};

export const LIGHT = {
  ...GLOBAL,
  colors: {
    main: '#4F2DEC',
    mainGradient: `linear-gradient(180deg, rgba(97, 141, 255, 0.4) 0%, rgba(123, 97, 255, 0.2) 100%)`,
    logoBorders: '#E9EFF6',
    typoPrimary: '#18181A',
    typoSecondary: '#6D6478',
    typoInverse: '#FFFFFF',
    gray900: '#110F19',
    gray800: '#191A25',
    gray700: '#262633',
    gray600: '#31303E',
    gradient900:
      'linear-gradient(180deg, #110F19 10.84%, rgba(17, 15, 25, 0) 59.6%)',
    gradient800:
      'linear-gradient(180deg, #191A25 10.84%, rgba(25, 26, 37, 0) 59.6%)',
    gradient700:
      'linear-gradient(180deg, #262633 10.84%, rgba(38, 38, 51, 0) 59.6%)',
    gradient600:
      'linear-gradient(180deg, #31303E 10.84%, rgba(49, 48, 62, 0) 59.6%)',
    glass: 'rgba(25, 26, 37, 0.9)',
    backdrop: 'rgba(17, 15, 25, 0.7)',
    feedback: {
      positive: '#1EA16A',
      positiveTint: '#E2F2EB',
      positiveTint2: 'rgba(226, 242, 235, 0.4)',
      negative: '#DC4D3A',
      negativeTint: '#F8C6C0',
      negativeTint2: 'rgba(248, 198, 192, 0.4)',
      warning: '#E8900E',
      warningTint: '#F9D79D',
      warningTint2: 'rgba(249, 215, 157, 0.4)'
    },
    surfaces: {
      900: GLOBAL.colors.white900,
      800: GLOBAL.colors.white800,
      700: GLOBAL.colors.white700,
      600: GLOBAL.colors.white600
    }
  }
};

export default {
  LIGHT,
  DARK
};

export const theme55 = {
  margin: 16,
  heroSize: 680,
  maxWidth: 1152,
  boxShadow: '0 0 3rem #333',
  //──── Colors ────────────────────────────────────────────────────────────────────────────
  colors: {
    darkBlue: '#171F46',
    grey: '#88827C',
    mediumBeige: '#D2CCC6',
    lightBeige: '#F3E9E1',
    lightestBeige: '#F8F7F7',
    white: '#FFF',
    brand: {
      yellow: '#dadcff',
      hover: '#FECE7B',
      lighter: '#FED58B',
      darker: '#FDAA15',
      orange: '#060e9f',
      orangeLight: ' #F37C6B',
      orangeDarker: '#DD2A10',
      blue: '#5CB5E6',
      lightBlue: '#C5E8F2',
      red: '#DB1E3B'
    },
    feedback: {
      success: {
        default: '#2DCA73',
        hover: '#57D48F',
        background: '#EAF9F1'
      },
      error: {
        default: '#DB1E3B',
        hover: '#E24B61',
        background: '#FBE8EB'
      },
      warning: {
        default: '#FEC35A',
        hover: '#FECE7B',
        background: '#FEF8EE'
      }
    },
    muted: {
      red: '#F1A5B1',
      orange: '#F9B9B0',
      yellow: '#FFE7BD',
      blue: '#BEE1F5',
      lightBlue: '#E8F6FA',
      green: '#ABEAC7',
      purple: '#CBABEA'
    }
  }
};
