import styled from 'styled-components'

export const ButtonText = styled.span`
  color: inherit;
  margin-right:10px;
  white-space: nowrap;
`

export const ButtonIcon = styled.span`
  align-items: center;
  display: flex;
  height: 32px;
  justify-content: center;
  min-width: 32px;
  /* transform: rotate(0deg); */
  /* transition: color .3s ease, transform 1s ease; */
  transition: color .3s ease;
`

export const Button = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.text};
  border-radius: 36px;
  border: 2px solid ${({ theme }) => theme.colors.text};
  color:  ${({ theme }) => theme.colors.text};
  display: flex;
  height: 36px;
  justify-content: flex-start;
  max-width: 36px;
  overflow: hidden;
  padding: 2px 0;
  transition: max-width .5s ease, background-color .5s ease, color .5s ease;
  
  ${ButtonIcon} {
    color: ${({ theme }) => theme.colors.background};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.headerBackground};
    max-width: 500px;
    ${ButtonIcon} {
      color: ${({ theme }) => theme.colors.textHighlight};
      /* transform: rotate(360deg); */
    }
  }
`
