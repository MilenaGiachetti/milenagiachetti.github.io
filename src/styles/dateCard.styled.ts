import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  margin-bottom: 32px;
`

export const InvertTitle = styled.div`
  display: flex;
  flex-flow: column-reverse;
  gap: 6px;;
`

export const Dates = styled.p`
  color: ${({ theme }) => theme.colors.textHighlight};
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 2.4px;
  font-family: ${({ theme }) => theme.fonts.primaryCondensed};
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

export const DescriptionList = styled.ul`
  padding-left: 20px;
  list-style: none;
`

export const DescriptionItem = styled.li`
  position: relative;
  &:before {
    content: "・";
    position: absolute;
    left: -20px;
  }
`

export const Certificate = styled.button`
  margin-top: 18px;
  text-transform: uppercase;
  padding: 5px 15px;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.primaryCondensed};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  border-radius: 15px;
  letter-spacing: 2.4px;
  background: ${({ theme }) => theme.colors.highlightBackground};
`
