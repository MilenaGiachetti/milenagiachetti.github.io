import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { GlobalStyles } from './styles/globalStyles';
import { ThemeProvider } from "styled-components";
import {
  light,
  dark
} from "./styles/theme.styled";
import { useState } from "react";

type Props = {}

const Layout = (props: Props) => {
  const [selectedTheme, setSelectedTheme] = useState(light);

  const toggleSelectedTheme = () => {
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