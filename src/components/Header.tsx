import React, { type ReactElement } from 'react'
import { Link } from 'react-router-dom'
import routes from '../constants/routes'
import { useTranslation } from 'react-i18next'

interface Props {
  toggleSelectedTheme: () => void
}

function Header ({ toggleSelectedTheme }: Props): ReactElement {
  const [, i18n] = useTranslation()

  return (
    <nav>
      <Link to={routes.HOME}>Home</Link>
      <Link to={`${routes.PROJECT_BASE}portfolio`}>Portfolio</Link>
      <Link to={`${routes.PROJECT_BASE}3d_experience`}>3D experience</Link>
      <button onClick={toggleSelectedTheme}>Theme</button>
      {/*
        Style selected option differently
        i18n.language to get current language
      */}
      <button onClick={() => { void i18n.changeLanguage('es') }}>es</button>
      <button onClick={() => { void i18n.changeLanguage('en') }}>en</button>
    </nav>
  )
}

export default Header
