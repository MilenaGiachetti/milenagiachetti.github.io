import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderStyled = styled.header`
  position: fixed;
  width: 100%;
  background: ${({ theme }) => theme.colors.headerBackground};
  backdrop-filter: blur(3px);
  z-index: 1;
`

export const NavStyled = styled.nav`
  align-items: center;
  max-width: 1200px;
  width: 100%;
  padding: 10px;
  margin: 0 auto;
  display: flex;
  gap: 20px;
`

export const LinkNumber = styled.span`
  font-weight: bold;
`

export const LinkStyled = styled(Link)`
  gap: 10px;
  text-transform: uppercase;
  letter-spacing: 2.4px;
  font-family: ${({ theme }) => theme.fonts.primaryCondensed};
  display: flex;
`

export const NavButtons = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`

interface LanguageButtonProps {
  active: boolean
}

export const LanguageButton = styled.button<LanguageButtonProps>`
  color: ${({ theme }) => theme.colors.text};
  text-transform: uppercase;
  padding: 10px;
  font-size: 16px;
  letter-spacing: 2.4px;
  font-family: ${({ theme }) => theme.fonts.primaryCondensed};
  color: ${({ active, theme }) => active ? theme.colors.textHighlight : theme.colors.text};
  font-weight: ${({ active }) => active ? 700 : 400};
`

export const ThemeButton = styled.button`
  height: 44px;
  padding: 10px;
`
