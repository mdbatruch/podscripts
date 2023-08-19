import { ReactNode } from 'react';
import styled from 'styled-components/macro';
import { WHITE } from 'styles/color';
import { SPACE_10, SPACE_20 } from 'styles/spacing';

interface ButtonProps {
  color?: string;
  backgroundColor?: string;
  label: string;
  onClick?: () => void;
  rounded?: boolean;
  icon?: ReactNode | JSX.Element;
  isDisabled?: boolean;
}

const ButtonWrapper = styled.button<{ rounded: boolean }>`
  display: flex;
  align-items: center;
  color: ${WHITE};
  border: none;
  font-family: inherit;
  padding: ${SPACE_10} ${SPACE_20} ${SPACE_10};
  border-radius: 4px;
  cursor: pointer;
  ${({ rounded }) =>
    rounded &&
    `
        border-radius: 30px;
        box-shadow: 0 0 0 7px rgba(255,255,255,0.2);
        &:hover {
            box-shadow: 0 0 0 7px rgba(100,100,100,0.4);
        }
  `}
  svg {
    margin: 3px 0px 0px 3px;
  }
`;

const Button = ({
  backgroundColor,
  color,
  label,
  rounded,
  icon,
  isDisabled,
  ...props
}: ButtonProps) => (
  <ButtonWrapper
    type="button"
    className={'secondary'}
    style={{ backgroundColor, color }}
    rounded={rounded!}
    disabled={isDisabled}
    {...props}
  >
    {label}
    {!!icon && <span>{icon}</span>}
  </ButtonWrapper>
);

export default Button;
