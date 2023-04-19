import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string
    colors: {
      background: string
      headerBackground: string
      highlightBackground: string
      lightText: string
      text: string
      textHighlight: string
      textLightHighlight: string
    }
    fonts: {
      primary: string
      primaryCondensed: string
    }
  }
}
