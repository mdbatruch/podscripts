import { ReactNode } from 'react';
import styled from 'styled-components';
import { WHITE } from 'styles/color';

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
  padding: 10px 25px;
  border-radius: 4px;
  cursor: pointer;
  ${({ rounded }) =>
    rounded &&
    `
        border-radius: 30px;
        box-shadow: 0 0 0 7px rgba(0,0,0,0.5);
        &:hover {
            box-shadow: 0 0 0 7px rgba(0,0,0,0.25);
        }
      `}
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
