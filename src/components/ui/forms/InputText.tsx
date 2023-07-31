import { ReactNode } from 'react';
import styled from 'styled-components/macro';

const Label = styled.div`
  color: red;
`;

const Text = styled.input`
  width: 100%;
`;

interface InputTextProps {
  label?: string;
  placeholder: string;
  onChange?: (e: any) => void;
}

export const InputText = ({
  label,
  placeholder,
  onChange,
  ...props
}: InputTextProps): JSX.Element => {
  return (
    <>
      {label && <Label>{label}</Label>}
      <Text type="text" placeholder={placeholder} onChange={onChange} />
    </>
  );
};

export default InputText;
