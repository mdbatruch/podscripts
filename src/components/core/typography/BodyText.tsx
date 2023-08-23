import styled from 'styled-components/macro';
import { BLACK, WHITE } from 'styles/color';
import { FONT_SIZE_12, FONT_SIZE_16 } from 'styles/typography';

export const BodyText = styled.p`
  color: ${BLACK};
  text-decoration: none;
  font-size: ${FONT_SIZE_16};
  line-height: 1.5;
`;

export const BodyTextLight = styled(BodyText)`
  color: ${WHITE};
`;

export const BodyTextSmall = styled.p`
  font-size: ${FONT_SIZE_12};
`;