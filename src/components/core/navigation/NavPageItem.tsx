import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { BLUE, WHITE } from '../../../styles/color';

export const NavPageItem = styled(NavLink)`
  height: 50px;
  position: relative;
  padding: 5px;
  text-decoration: none;
  color: ${WHITE};
  &.active {
    color: ${BLUE};
    &::before {
      background: ${BLUE};
      border-radius: 4px;
      bottom: -25px;
      content: '';
      display: none;
      height: 4px;
      left: 0;
      position: absolute;
      right: 0;
      display: block;
    }
  }
`;
