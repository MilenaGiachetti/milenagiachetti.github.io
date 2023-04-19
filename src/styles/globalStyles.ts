import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-style: normal;
    font-synthesis: none;
    font-weight: 400;
    line-height: 1.5;
    // to avoid layout jump when changing from no scrollbar to scrollbar or viceversa
    overflow-y: overlay;
    scrollbar-gutter: stable;
    text-rendering: optimizeLegibility;
  }
  
  * {
    border: none;
    box-sizing: border-box;
    margin: 0;
    outline: none;
    padding: 0;
  }

  a {
    color: inherit;
    cursor: pointer;
    text-decoration: none;
  }

  button {
    background-color: unset;
    cursor: pointer;
  }
`
