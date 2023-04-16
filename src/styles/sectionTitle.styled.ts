import styled from 'styled-components'

export const SectionTitleStyled = styled.h2`
  font-size: 28px;
  text-transform: uppercase;
  font-weight: 400;
  margin-top: 48px;
  margin-bottom: 24px;
  letter-spacing: 4.5px;
  font-family: ${({ theme }) => theme.fonts.primaryCondensed};
`

export const SectionTitleNumberStyled = styled.span`
  color: ${({ theme }) => theme.colors.lightText};
  font-weight: 500;
  margin-right: 10px;
`
