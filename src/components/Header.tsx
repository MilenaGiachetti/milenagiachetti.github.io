import React, { type ReactElement } from 'react'

import { useTranslation } from 'react-i18next'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from 'styled-components'

import routes from '@/constants/routes'
import { HeaderStyled, LanguageButton, LinkNumber, LinkStyled, NavButtons, NavStyled, ThemeButton } from '@/styles/header.styled'

interface Props {
  toggleSelectedTheme: () => void
}

function Header ({ toggleSelectedTheme }: Props): ReactElement {
  const [, i18n] = useTranslation()
  const theme = useTheme()

  return (
    <HeaderStyled>
      <NavStyled>
        <LinkStyled to={`${routes.HOME}#home`}>
          <svg width="48" height="57" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="logo">
              <circle id="Oval" cx="24" cy="24" r="24" fill={theme.colors.text} />
              <path id="g" d="M28.624 11.256C28.624 10.8293 28.8373 10.616 29.264 10.616H32.528C32.9547 10.616 33.168 10.8293 33.168 11.256V42.36C33.168 46.9253 32.1013 50.3813 29.968 52.728C27.8773 55.1173 24.3573 56.2053 19.408 55.992C18.9813 55.9493 18.768 55.7147 18.768 55.288V52.536C18.768 52.1093 18.9813 51.896 19.408 51.896C22.8213 51.9813 25.2107 51.192 26.576 49.528C27.9413 47.9067 28.624 45.3893 28.624 41.976V40.056C28.624 39.9707 28.5813 39.9067 28.496 39.864C28.4533 39.8213 28.3893 39.8427 28.304 39.928C27.5787 40.9947 26.64 41.8053 25.488 42.36C24.3787 42.9147 23.184 43.192 21.904 43.192C19.216 43.192 17.0827 42.296 15.504 40.504C13.968 38.712 13.2 36.344 13.2 33.4V19.896C13.2 16.9093 13.968 14.5413 15.504 12.792C17.0827 11 19.216 10.104 21.904 10.104C23.184 10.104 24.3787 10.3813 25.488 10.936C26.64 11.448 27.5787 12.2373 28.304 13.304C28.3893 13.432 28.4533 13.496 28.496 13.496C28.5813 13.4533 28.624 13.368 28.624 13.24V11.256ZM23.248 39.224C24.8267 39.224 26.1067 38.6693 27.088 37.56C28.112 36.408 28.624 34.936 28.624 33.144V20.216C28.624 18.3813 28.112 16.9093 27.088 15.8C26.1067 14.648 24.8267 14.072 23.248 14.072C21.6267 14.072 20.304 14.648 19.28 15.8C18.256 16.9093 17.744 18.3813 17.744 20.216V33.144C17.744 34.936 18.256 36.408 19.28 37.56C20.304 38.6693 21.6267 39.224 23.248 39.224Z" fill={theme.colors.background} />
            </g>
          </svg>
        </LinkStyled>
        <LinkStyled to={`${routes.HOME}#projects`}>
          <LinkNumber>00</LinkNumber>
          Projects
        </LinkStyled>
        <LinkStyled to={`${routes.HOME}#technologies`}>
          <LinkNumber>01</LinkNumber>
          Technologies
        </LinkStyled>
        <LinkStyled to={`${routes.HOME}#work`}>
          <LinkNumber>02</LinkNumber>
          Experience
        </LinkStyled>
        <LinkStyled to={`${routes.HOME}#studies`}>
          <LinkNumber>03</LinkNumber>
          Education
        </LinkStyled>

        <NavButtons>
          <LanguageButton type="button" onClick={() => { void i18n.changeLanguage('es') }} active={i18n.language === 'es'}>es</LanguageButton>|
          <LanguageButton type="button" onClick={() => { void i18n.changeLanguage('en') }} active={i18n.language === 'en'}>en</LanguageButton>
          <ThemeButton onClick={toggleSelectedTheme}>
            {
              theme.name === 'dark-theme'
                ? <FiSun color={theme.colors.text} size="24px" />
                : <FiMoon color={theme.colors.text} size="24px" />
            }
          </ThemeButton>
        </NavButtons>
      </NavStyled>
    </HeaderStyled>
  )
}

export default Header
