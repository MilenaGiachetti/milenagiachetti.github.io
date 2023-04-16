import React from 'react'
import { SectionTitleNumberStyled, SectionTitleStyled } from '../styles/sectionTitle.styled'

type Props = {
  number: string,
  title: string
}

function SectionTitle({ number, title }: Props) {
  return (
    <SectionTitleStyled>
      <SectionTitleNumberStyled>{number}</SectionTitleNumberStyled>
      {title}
    </SectionTitleStyled>
  )
}

export default SectionTitle