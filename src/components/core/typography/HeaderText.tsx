import styled from 'styled-components/macro';
import { BLUE, WHITE } from 'styles/color';
import { FONT_SIZE_14 } from 'styles/typography';

export const HeaderText = styled.div`
  color: ${WHITE};
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  font-size: ${FONT_SIZE_14};
  &:hover {
    color: ${BLUE};
  }
`;
