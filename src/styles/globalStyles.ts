import { createGlobalStyle } from 'styled-components'

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
    // to avoid layout jump when changing from no scrollbar to scrollbar or viceversa
    overflow-y: overlay;
    scrollbar-gutter: stable;
  }
  
  * {
    box-sizing: border-box;
    outline: none;
    border: none;
    margin: 0;
    padding: 0;
  }

  button {
    background-color: unset;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
`
