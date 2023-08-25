import { ChangeEvent, ReactNode } from 'react';
import styled from 'styled-components/macro';
import { SPACE_10, SPACE_20, SPACE_40 } from 'styles/spacing';

const InputTextContainer = styled.div`
  padding-right: ${SPACE_40};
`;

const Label = styled.div`
  color: red;
`;

const TextArea = styled.textarea<{ $height: number }>`
  width: 100%;
  border-radius: 4px;
  padding: ${SPACE_20};
  box-sizing: border-box;
  ${({ $height }) =>
    !!$height &&
    `
    height: ${$height}px;
  `}
  margin: ${SPACE_10} 0;
`;

export interface InputTextAreaProps {
  label?: string;
  placeholder: string;
  name?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  height: number;
  value?: string;
  icon?: ReactNode | JSX.Element;
}

export const InputTextArea = ({
  label,
  placeholder,
  name,
  onChange,
  height,
}: InputTextAreaProps): JSX.Element => {
  return (
    <InputTextContainer>
      {label && <Label>{label}</Label>}
      <TextArea  
        placeholder={placeholder}
        $height={height}
        name={name}
        onChange={onChange}
      />
    </InputTextContainer>
  );
};

export default InputTextArea;
