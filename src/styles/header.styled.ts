import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderStyled = styled.header`
  backdrop-filter: blur(3px);
  background: ${({ theme }) => theme.colors.headerBackground};
  position: fixed;
  width: 100%;
  z-index: 1;
`

interface LanguageButtonProps {
  active: boolean
}

export const LanguageButton = styled.button<LanguageButtonProps>`
  color: ${({ active, theme }) => active ? theme.colors.textHighlight : theme.colors.text};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primaryCondensed};
  font-size: 16px;
  font-weight: ${({ active }) => active ? 700 : 400};
  letter-spacing: 2.4px;
  padding: 10px;
  text-transform: uppercase;
`

export const LinkNumber = styled.span`
  font-weight: bold;
`

export const LinkStyled = styled(Link)`
  display: flex;
  font-family: ${({ theme }) => theme.fonts.primaryCondensed};
  gap: 10px;
  letter-spacing: 2.4px;
  text-transform: uppercase;
`

export const NavButtons = styled.div`
  align-items: center;
  display: flex;
  margin-left: auto;
`

export const NavStyled = styled.nav`
  align-items: center;
  display: flex;
  gap: 20px;
  margin: 0 auto;
  max-width: 1200px;
  padding: 10px 20px;
  width: 100%;
`

export const ThemeButton = styled.button`
  height: 44px;
  padding: 10px;
`
