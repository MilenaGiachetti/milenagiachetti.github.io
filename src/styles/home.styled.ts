import styled from "styled-components";
import { PillStyled } from "./pill.styled";

export const MainContainerStyled = styled.main`
  max-width: 640px;
  padding: 20px;
  margin: 0 auto;
`

export const AboutMeStyled = styled.div`
  background: ${({ theme }) => theme.colors.highlightBackground};
  border-radius: 10px;
  padding: 20px;
`

export const NameStyled = styled.h2`
  font-size: 48px;
  line-height: 58px;
`

export const PositionStyled = styled.p`
  color: ${({ theme }) => theme.colors.textLightHighlight};
  text-transform: uppercase;
  margin-bottom: 10px;
`

export const PositionHighlightStyled = styled.span`
  color: ${({ theme }) => theme.colors.textHighlight};
`

export const PillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  justify-content: space-between;
  ${PillStyled} {
    max-width: unset;
    flex-grow: 1;
  }
  & > ${PillStyled}:last-child {
    margin-right: auto;
    flex-grow: unset;
  }
`