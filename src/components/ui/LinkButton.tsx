import styled from 'styled-components/macro';
import { BLUE, WHITE } from 'styles/color';
import { SPACE_10 } from 'styles/spacing';

const LinkButton = styled.div`
  background: ${BLUE};
  padding: ${SPACE_10} 25px;
  color: ${WHITE};
  border-radius: 4px;
`;

export default LinkButton;
