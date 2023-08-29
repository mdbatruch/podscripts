import styled, { css } from 'styled-components/macro';
import { GREY_DARK, WHITE } from 'styles/color';
import { SPACE_20 } from 'styles/spacing';
import { FONT_SIZE_16 } from 'styles/typography';

const TitleStyles = css`
    font-weight: 600;
    margin-bottom: 10px;
    text-align: left;
    width: 100%;
`;

const FooterTitleStyles = css`
    border-bottom: 1px solid ${GREY_DARK};
    padding: ${SPACE_20} 0;
`;

export const H3Title = styled.h3<{ $light?: boolean }>`
    ${TitleStyles}
    ${FooterTitleStyles}
    font-size: ${FONT_SIZE_16};
    ${({ $light }) => !!$light && `color: ${WHITE}`};
`;