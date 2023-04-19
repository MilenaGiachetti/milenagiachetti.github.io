import React, { type ReactElement } from 'react'

import Contact from './Contact'
import { FooterStyled } from '../styles/footer.styled'

const Footer = (): ReactElement => {
  return (
    <FooterStyled>
      <p>Milena Giachetti</p>
      <Contact />
    </FooterStyled>
  )
}

export default Footer
