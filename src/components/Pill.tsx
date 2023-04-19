import React, { type ReactElement } from 'react'

import { PillIcon, PillName, PillStyled } from '@/styles/pill.styled'

interface Props {
  icon: string
  name: string
}

function Pill ({ icon, name }: Props): ReactElement {
  return (
    <PillStyled>
      <PillIcon src={icon} />
      <PillName>{name}</PillName>
    </PillStyled>
  )
}

export default Pill
