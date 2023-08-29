import { ReactNode } from 'react';
import styled, { css } from 'styled-components/macro';
import { WHITE } from 'styles/color';
import { SPACE_10, SPACE_20 } from 'styles/spacing';

export type ButtonType = "button" | "submit" | "reset";

export interface ButtonProps {
  color?: string;
  backgroundColor?: string;
  label: string | undefined;
  onClick?: () => void;
  rounded?: boolean;
  icon?: ReactNode | JSX.Element;
  isDisabled?: boolean;
  type?: ButtonType;
  /** Switch order of Text and Icon */
  reverse?: boolean;
  /** Go full with or constrain to text and Icon Length */
  fullWidth?: boolean;
}

const ButtonWrapper = styled.button<{ rounded: boolean, reverse: boolean, fullWidth: boolean }>`
  display: flex;
  align-items: center;
  color: ${WHITE};
  border: none;
  font-family: inherit;
  padding: ${SPACE_10} ${SPACE_20} ${SPACE_10};
  border-radius: 4px;
  cursor: pointer;
  svg {
    margin: 3px 0px 0px 3px;
  }
  ${({ rounded }) =>
    rounded &&
    `
        border-radius: 30px;
        box-shadow: 0 0 0 7px rgba(255,255,255,0.2);
        &:hover {
            box-shadow: 0 0 0 7px rgba(100,100,100,0.4);
        }
  `}
  ${({ reverse }) => !!reverse && reverseOrder}
  ${({ fullWidth }) =>
    fullWidth &&
    `
      width: 100%;
      justify-content: center;
  `}
`;

const reverseOrder = css`
    flex-direction: row-reverse;
`;

const Button = ({
  backgroundColor,
  color,
  fullWidth,
  icon,
  isDisabled,
  label,
  reverse,
  rounded,
  type,
  ...props
}: ButtonProps) => (
  <ButtonWrapper
    className={'secondary'}
    disabled={isDisabled}
    fullWidth={fullWidth!}
    reverse={reverse!}
    rounded={rounded!}
    style={{ backgroundColor, color }}
    type={type}
    {...props}
  >
    {label}
    {!!icon && <span style={ reverse ? { marginRight: `${SPACE_10}` } : {}} >{icon}</span>}
  </ButtonWrapper>
);

export default Button;
