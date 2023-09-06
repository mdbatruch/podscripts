import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`
    html,
    body {
        margin: 0px;
        font-family: 'Quicksand', sans-serif;
        font-size: 12px;
        font-weight: 400;
        background: #f9f9f9;
    }
`;

export default GlobalStyle;
