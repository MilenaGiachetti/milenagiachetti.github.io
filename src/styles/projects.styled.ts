import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Arrow = styled.div`
  background-color: ${({ theme }) => theme.colors.text};;
  display: block;
  height: 22px;
  position: relative;
  transform: rotate(-90deg);
  transition: transform .3s ease;
  width: 2px;

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

interface FilterProps {
  active: boolean
}

export const Filter = styled.button<FilterProps>`
  background: unset;
  border-bottom: 2px solid ${({ active, theme }) => active ? theme.colors.text : 'transparent'};
  color: ${({ active, theme }) => active ? theme.colors.text : theme.colors.textLightHighlight};
  font-family: ${({ theme }) => theme.fonts.primaryCondensed};
  font-size: 16px;
  letter-spacing: 2.4px;
  padding-bottom: 15px;
  text-transform: uppercase;
`

export const FiltersContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 10px;
`

export const NoResults = styled.p`
  padding: 48px 0 24px 0;
  text-align: center;
  width: 100%;
`

export const ProjectStyled = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 20px 0;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.text};
  }
`
