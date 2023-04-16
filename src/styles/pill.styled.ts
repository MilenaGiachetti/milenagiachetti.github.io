import styled from 'styled-components'

export const PillStyled = styled.div`
  background: ${({ theme }) => theme.colors.highlightBackground};
  display: inline-flex;
  align-items: center;
  padding: 7px 15px;
  font-size: 14px;
  border-radius: 20px;
  max-width: max-content;
`

export const PillIcon = styled.img`
  height: 22px;
  margin-right: 15px;
`

export const PillName = styled.p`
  text-align: center;
  flex-grow: 1;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-family: ${({ theme }) => theme.fonts.primaryCondensed};
`
