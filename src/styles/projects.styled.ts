import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const FiltersContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 10px;
`

interface FilterProps {
  active: boolean
}

export const Filter = styled.button<FilterProps>`
  text-transform: uppercase;
  background: unset;
  color: ${({ active, theme }) => active ? theme.colors.text : theme.colors.textLightHighlight};
  border-bottom: 2px solid ${({ active, theme }) => active ? theme.colors.text : 'transparent'};
  font-family: ${({ theme }) => theme.fonts.primaryCondensed};
  letter-spacing: 2.4px;
  font-size: 16px;
  padding-bottom: 15px;
`

export const ProjectStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.text};
  }
`

export const Arrow = styled.div`
  background-color: ${({ theme }) => theme.colors.text};;
  display: block;
  height: 22px;
  position: relative;
  width: 2px;
  transform: rotate(-90deg);
  transition: transform .3s ease;
  &:after {
      background-color: ${({ theme }) => theme.colors.text};
      bottom: -2px;
      content: '';
      display: block;
      height: 10px;
      left: -3px;
      position: absolute;
      transform: rotate(135deg);
      width: 2px;
  }
  &:before {
      background-color: ${({ theme }) => theme.colors.text};;
      bottom: -2px;
      content: '';
      display: block;
      height: 10px;
      left: 3px;
      position: absolute;
      transform: rotate(-135deg);
      width: 2px;
  }
`

export const ArrowButton = styled(Link)`
  background-color: transparent;
  border-radius: 50%;
  cursor: pointer;
  padding: 10px 21px;
  transition: background-color .3s ease;
  width: 30px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.highlightBackground};
    ${Arrow} {
        transform: rotate(-135deg);
    }
  }
`

export const NoResults = styled.p`
  width: 100%;
  text-align: center;
  padding: 48px 0 24px 0;
`
