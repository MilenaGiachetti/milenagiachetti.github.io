import React, { type ReactElement, useState, useEffect } from 'react'

import { Outlet, useLocation } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { GlobalStyles } from '@/styles/globalStyles'
import { MainContainerStyled } from '@/styles/layout.styled'
import {
  dark,
  light
} from '@/styles/theme.styled'

const Layout = (): ReactElement => {
  const [selectedTheme, setSelectedTheme] = useState(dark)
  const location = useLocation()

  useEffect(() => {
    const hash = location.hash.substring(1)
    if (hash.length > 0) {
      const elementRef = document.getElementById(hash)
      if (elementRef != null) {
        window.scrollTo({
          // spacing & header height
          top: elementRef.offsetTop - 20 - 80,
          behavior: 'smooth'
        })
      }
    }
  }, [location])

  const toggleSelectedTheme = (): void => {
    setSelectedTheme(prevTheme => prevTheme === light ? dark : light)
  }

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <Header toggleSelectedTheme={toggleSelectedTheme} />
      <MainContainerStyled>
        <Outlet />
      </MainContainerStyled>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
