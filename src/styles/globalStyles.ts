import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    font-family: ${({ theme }) => theme.fonts.primary};
    line-height: 1.5;
    font-weight: 400;
    font-style: normal;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }
  * {
    box-sizing: border-box;
    outline: none;
    border: none;
    margin: 0;
    padding: 0;
  }
`