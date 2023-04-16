import React, { type ReactElement, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import { GlobalStyles } from './styles/globalStyles'
import { ThemeProvider } from 'styled-components'
import {
  dark,
  light
} from './styles/theme.styled'

const Layout = (): ReactElement => {
  const [selectedTheme, setSelectedTheme] = useState(dark)

  const toggleSelectedTheme = (): void => {
    setSelectedTheme(prevTheme => prevTheme === light ? dark : light)
  }

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <Header toggleSelectedTheme={toggleSelectedTheme} />
      <Outlet />
      <p>Footer</p>
    </ThemeProvider>
  )
}

export default Layout
