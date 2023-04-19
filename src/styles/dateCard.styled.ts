import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  margin-bottom: 32px;
`

export const Certificate = styled.button`
  background: ${({ theme }) => theme.colors.highlightBackground};
  border-radius: 15px;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.primaryCondensed};
  font-size: 14px;
  letter-spacing: 2.4px;
  margin-top: 18px;
  padding: 5px 15px;
  text-transform: uppercase;
`

export const Dates = styled.p`
  color: ${({ theme }) => theme.colors.textHighlight};
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 2.4px;
  font-family: ${({ theme }) => theme.fonts.primaryCondensed};
`

export const DescriptionItem = styled.li`
  position: relative;
  &:before {
    content: "・";
    left: -20px;
    position: absolute;
  }
`

export const DescriptionList = styled.ul`
  padding-left: 20px;
  list-style: none;
`

export const InvertTitle = styled.div`
  display: flex;
  flex-flow: column-reverse;
  gap: 6px;;
`

export const Position = styled.h3`
  text-transform: uppercase;
  font-size: 18px;
`

export const Stack = styled.p`
  font-size: 14px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textLightHighlight};
  letter-spacing: 2.4px;
  font-family: ${({ theme }) => theme.fonts.primaryCondensed};

`
