import React, { type ReactElement } from 'react'

import { Html } from '@react-three/drei'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useTheme } from 'styled-components'

import { Button, ButtonIcon, ButtonText } from '@/styles/modelButton.styled'
import { type modelButton } from '@/types/modelButton'

const ModelButton = ({ iconElement, label, position, section }: modelButton): ReactElement => {
  const theme = useTheme()
  const [t] = useTranslation()
  const navigate = useNavigate()

  const handleClick = (value: string): void => {
    navigate(`/#${value}`)
  }

  return (
    <Html position={position}>
      <Button type='button' theme={theme} onClick={() => { handleClick(section) }}>
        <ButtonIcon>
          {iconElement}
        </ButtonIcon>
        <ButtonText>
          {t('model.view')} {t(label)}
        </ButtonText>
      </Button>
    </Html>
  )
}

export default ModelButton
