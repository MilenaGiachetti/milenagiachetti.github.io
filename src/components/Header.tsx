import React from 'react'
import { Link } from 'react-router-dom'
import routes from '../constants/routes'

type Props = {}

function Header({ }: Props) {
  return (
    <nav>
      <Link to={routes.HOME}>Home</Link>
      <Link to={`${routes.PROJECT_BASE}portfolio`}>Portfolio</Link>
      <Link to={`${routes.PROJECT_BASE}3d_experience`}>3D experience</Link>
    </nav>
  )
}

export default Header