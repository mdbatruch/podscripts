import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import { SPACE_20 } from 'styles/spacing';
import { BLUE, WHITE } from '../../../styles/color';

export const NavPageItem = styled(NavLink)<{
  $isMobile?: boolean;
}>`
  position: relative;
  padding: 5px;
  text-decoration: none;
  color: ${WHITE};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${BLUE};
  }
  ${({ $isMobile }) =>
    !!$isMobile &&
    `
    padding: ${SPACE_20}; 
    display: block;
  `}
    &.active {
      color: ${BLUE};
  ${({ $isMobile }) =>
    !$isMobile &&
    `
      &::before {
        background: ${BLUE};
        border-radius: 4px;
        bottom: -23px;
        content: '';
        display: none;
        height: 4px;
        left: 0;
        position: absolute;
        right: 0;
        display: block;
      }
    }
  `}
`;
