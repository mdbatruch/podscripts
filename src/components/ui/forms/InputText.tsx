import { ChangeEvent, ReactNode } from 'react';
import styled from 'styled-components/macro';
import { BLACK } from 'styles/color';
import { SPACE_10, SPACE_30, SPACE_40 } from 'styles/spacing';

const InputTextContainer = styled.div`
  padding-right: ${SPACE_40};
  position: relative;
`;

const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
`;

const Label = styled.div`
  color: red;
`;

const Text = styled.input<{ $hasIcon?: boolean }>`
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${BLACK};
  padding-left: ${SPACE_10};
  height: ${SPACE_40};
  margin: ${SPACE_10} 0;
  ${({ $hasIcon }) =>
    !!$hasIcon &&
    `
    text-indent: ${SPACE_30};
  `}
`;

export interface InputTextProps {
  label?: string;
  placeholder: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  icon?: ReactNode | JSX.Element;
  value?: string;
  name?: string;
}

export const InputText = ({
  label,
  placeholder,
  name,
  onChange,
  icon,
}: InputTextProps): JSX.Element => {
  return (
    <InputTextContainer>
      {!!icon && <IconContainer>{icon}</IconContainer>}
      {label && <Label>{label}</Label>}
      <Text type="text" name={name} placeholder={placeholder} onChange={onChange} $hasIcon={!!icon} />
    </InputTextContainer>
  );
};

export default InputText;
