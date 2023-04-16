import React from 'react'
import { PillIcon, PillName, PillStyled } from '../styles/pill.styled'

type Props = {
  icon: string,
  name: string,
}

function Pill({ icon, name }: Props) {
  return (
    <PillStyled>
      <PillIcon src={icon} />
      <PillName>{name}</PillName>
    </PillStyled>
  )
}

export default Pill