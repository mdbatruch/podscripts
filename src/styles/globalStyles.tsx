import { createGlobalStyle } from 'styled-components/macro';
import { VERY_LIGHT_GREY } from './color';

const GlobalStyle = createGlobalStyle`
    html,
    body {
        margin: 0px;
        font-family: 'Quicksand', sans-serif;
        font-size: 12px;
        font-weight: 400;
        background: ${VERY_LIGHT_GREY};
    }
`;

export default GlobalStyle;
