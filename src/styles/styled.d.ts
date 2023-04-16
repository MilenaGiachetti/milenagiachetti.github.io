import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string,
    colors: {
      background: string,
      text: string,
      lightText: string,
      textHighlight: string,
      textLightHighlight: string,
      highlightBackground: string,
    },
    fonts: {
      primary: string,
      primaryCondensed: string,
    }
  }
}