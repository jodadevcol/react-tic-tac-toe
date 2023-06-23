import { createGlobalTheme, globalStyle } from "@vanilla-extract/css";

export const rootVars = createGlobalTheme(
  ':root',
  {
    color: {
      blue: '#31c3bdff',
      blueHover: '#65e9e4ff',
      yellow: '#f2b137ff',
      yellowHover: '#ffc860ff',
      silver: '#a8bfc9ff',
      silverHover: '#dbe8edff',
      dark: '#1f3641ff',
      semiDark: '#1a2a33ff',
    },
    font: {
      primary: '"Outfit", system-ui, Avenir, Helvetica, Arial, sans-serif',
      size: {
        l: '40px',
        m: '24px',
        s: '20px',
        xs: '16px'
      }
    },
  }
)

export const root = globalStyle(
  ':root',
  {
    lineHeight: 1.25,
    fontFamily: rootVars.font.primary,
    fontSize: '62.5%',
    fontWeight: 400,
    colorScheme: "light dark",
    color: rootVars.color.silver,
    backgroundColor: rootVars.color.dark,
    fontSynthesis: "none",
    textRendering: "optimizeLegibility",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    WebkitTextSizeAdjust: "100%"
  }
)

export const resetHTML = globalStyle(
  '*, *::before, *::after', 
  {
    margin: 0,
    padding: 0,
    boxSizing: "border-box"
  }
)

export const body = globalStyle(
  'body',
  {
    height: "100%",
    maxHeight: '100vh'
  }
)