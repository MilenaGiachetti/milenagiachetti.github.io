import styled from 'styled-components'

export const SectionTitleNumberStyled = styled.span`
  color: ${({ theme }) => theme.colors.lightText};
  font-weight: 500;
  margin-right: 10px;
`

export const SectionTitleStyled = styled.h2`
  font-family: ${({ theme }) => theme.fonts.primaryCondensed};
  font-size: 28px;
  font-weight: 400;
  letter-spacing: 4.5px;
  margin-bottom: 24px;
  margin-top: 48px;
  text-transform: uppercase;
`
