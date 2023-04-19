import { type DefaultTheme } from 'styled-components'

export const light: DefaultTheme = {
  name: 'light-theme',
  colors: {
    background: '#FEFFFE',
    headerBackground: 'rgba(254, 255, 254, 0.5)',
    highlightBackground: 'linear-gradient(90deg, hsla(358, 85%, 68%, 0.15) 0%, hsla(29, 100%, 50%, 0.15) 100%)',
    lightText: 'rgba(11, 13, 23, 0.25)',
    text: '#0B0D17',
    textHighlight: '#FF7A00',
    textLightHighlight: '#A0B1D2'
  },
  fonts: {
    primary: "'Barlow', sans-serif",
    primaryCondensed: "'Barlow Condensed', sans-serif"
  }
}

export const dark: DefaultTheme = {
  name: 'dark-theme',
  colors: {
    background: '#0B0D17',
    headerBackground: 'rgba(11, 13, 23, 0.5)',
    highlightBackground: 'rgba(160, 177, 210, 0.2)',
    lightText: 'rgba(254, 255, 254, 0.6)',
    text: '#FEFFFE',
    textHighlight: '#FF7A00',
    textLightHighlight: '#A0B1D2'
  },
  fonts: {
    primary: "'Barlow', sans-serif",
    primaryCondensed: "'Barlow Condensed', sans-serif"
  }
}

// full code for light mode gradient
// background: hsla(358, 85%, 68%, 1);

// background: linear-gradient(90deg, hsla(358, 85%, 68%, 1) 0%, hsla(29, 100%, 50%, 1) 100%);

// background: -moz-linear-gradient(90deg, hsla(358, 85%, 68%, 1) 0%, hsla(29, 100%, 50%, 1) 100%);

// background: -webkit-linear-gradient(90deg, hsla(358, 85%, 68%, 1) 0%, hsla(29, 100%, 50%, 1) 100%);

// filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#f3696e", endColorstr="#FF7A00", GradientType=1 );
