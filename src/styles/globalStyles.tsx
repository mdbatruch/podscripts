import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`
    html,
    body {
        margin: 0px;
        font-family: 'Quicksand', sans-serif;
        font-size: 14px;
        font-weight: 400;
    }

    p {
        font-size: 1.2rem;
        line-height: 1.5;
    }
`;

export default GlobalStyle;
