import styled from 'styled-components'

export const PillIcon = styled.img`
  height: 22px;
  margin-right: 15px;
`

export const PillName = styled.p`
  flex-grow: 1;
  font-family: ${({ theme }) => theme.fonts.primaryCondensed};
  letter-spacing: 2.5px;
  text-align: center;
  text-transform: uppercase;
`

export const PillStyled = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.colors.highlightBackground};
  border-radius: 20px;
  display: inline-flex;
  font-size: 14px;
  max-width: max-content;
  padding: 7px 15px;
`
