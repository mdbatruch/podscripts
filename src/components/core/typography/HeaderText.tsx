import styled from 'styled-components/macro';
import { BLUE, WHITE } from 'styles/color';

export const HeaderText = styled.div`
  color: ${WHITE};
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${BLUE};
  }
`;
