import styled from 'styled-components/macro';
import { SPACE_10, SPACE_40 } from 'styles/spacing';

const InputTextContainer = styled.div`
  padding-right: ${SPACE_40};
`;

const Label = styled.div`
  color: red;
`;

const Text = styled.input`
  width: 100%;
  border-radius: 4px;
  padding-left: ${SPACE_10};
  height: ${SPACE_40};
  margin: ${SPACE_10} 0;
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
    <InputTextContainer>
      {label && <Label>{label}</Label>}
      <Text type="text" placeholder={placeholder} onChange={onChange} />
    </InputTextContainer>
  );
};

export default InputText;
