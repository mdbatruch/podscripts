import styled from 'styled-components';
import { BLUE, WHITE } from 'styles/color';

export const IconContainer = styled.div`
    fill: ${WHITE};
    transition: color 0.2s ease-in-out;
    &:hover {
        // fill: ${BLUE};
    }
`;