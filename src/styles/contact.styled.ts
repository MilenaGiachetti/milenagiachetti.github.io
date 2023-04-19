import styled from 'styled-components'

export const ContactButton = styled.button`
  align-items: center;
  background: ${({ theme }) => theme.colors.highlightBackground};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  height: 36px;
  justify-content: center;
  width: 36px;
`

export const ContactContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`
