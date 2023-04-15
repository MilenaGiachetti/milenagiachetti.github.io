import React from 'react'
import { Link } from 'react-router-dom'
import routes from '../constants/routes'
import { useTranslation } from 'react-i18next';

type Props = {}

function Header({ }: Props) {
  const [t, i18n] = useTranslation();

  return (
    <nav>
      <Link to={routes.HOME}>Home</Link>
      <Link to={`${routes.PROJECT_BASE}portfolio`}>Portfolio</Link>
      <Link to={`${routes.PROJECT_BASE}3d_experience`}>3D experience</Link>
      {/* 
        Style selected option differently
        i18n.language to get current language
      */}
      <button onClick={() => i18n.changeLanguage('es')}>es</button>
      <button onClick={() => i18n.changeLanguage('en')}>en</button>
    </nav>
  )
}

export default Header