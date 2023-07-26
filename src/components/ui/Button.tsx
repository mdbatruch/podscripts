import { ReactNode } from 'react';
import styled from 'styled-components';
import { WHITE } from 'styles/color';

interface ButtonProps {
  backgroundColor?: string;
  label: string;
  onClick?: () => void;
  rounded?: boolean | undefined;
  icon?: ReactNode | JSX.Element;
}

const ButtonWrapper = styled.button<{ rounded: boolean }>`
  display: flex;
  align-items: center;
  color: ${WHITE};
  border: none;
  padding: 10px 25px;
  border-radius: 4px;
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
  label,
  rounded,
  icon,
  ...props
}: ButtonProps) => (
  <ButtonWrapper
    type="button"
    className={'secondary'}
    style={{ backgroundColor }}
    rounded={rounded!}
    {...props}
  >
    {label}
    {!!icon && <span>{icon}</span>}
  </ButtonWrapper>
);

export default Button;
