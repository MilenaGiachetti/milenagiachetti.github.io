import styled from 'styled-components'

import { PillStyled } from './pill.styled'

export const AboutMeStyled = styled.div`
  background: ${({ theme }) => theme.colors.highlightBackground};
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 20px;
`

export const NameStyled = styled.h2`
  font-size: 48px;
  line-height: 58px;
`

export const PillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  justify-content: space-between;

  ${PillStyled} {
    flex-grow: 1;
    max-width: unset;
  }

  & > ${PillStyled}:last-child {
    flex-grow: unset;
    margin-right: auto;
  }
`

export const PositionHighlightStyled = styled.span`
  color: ${({ theme }) => theme.colors.textHighlight};
`

export const PositionStyled = styled.p`
  color: ${({ theme }) => theme.colors.textLightHighlight};
  margin-bottom: 10px;
  text-transform: uppercase;
`
