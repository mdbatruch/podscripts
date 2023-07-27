import styled from 'styled-components/macro';
import { WHITE } from 'styles/color';

const Label = styled.div`
  color: red;
`;

const Text = styled.input`
  width: 100%;
`;

interface InputTextProps {
  label?: string;
  placeholder: string;
}

export const InputText = ({ label, placeholder, ...props }: InputTextProps) => {
  return (
    <>
      {label && <Label>{label}</Label>}
      <Text type="text" placeholder={placeholder} />
    </>
  );
};

export default InputText;
