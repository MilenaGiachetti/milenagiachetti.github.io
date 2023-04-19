import React, { type ReactElement } from 'react'

import { SectionTitleNumberStyled, SectionTitleStyled } from '../styles/sectionTitle.styled'

interface Props {
  number: string
  title: string
}

function SectionTitle ({ number, title }: Props): ReactElement {
  return (
    <SectionTitleStyled>
      <SectionTitleNumberStyled>{number}</SectionTitleNumberStyled>
      {title}
    </SectionTitleStyled>
  )
}

export default SectionTitle
