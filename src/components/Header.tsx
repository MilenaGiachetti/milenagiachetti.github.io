import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

function Header({ }: Props) {
  return (
    <nav>
      <Link to="">Home</Link>
      <Link to="projects/portfolio">Portfolio</Link>
      <Link to="projects/3d_experience">3D experience</Link>
    </nav>
  )
}

export default Header