import styled from 'styled-components/macro';
import { WHITE } from 'styles/color';

const Label = styled.div`
  color: red;
`;

const Text = styled.input`
  width: 100%;
`;

const InputText = (props: any) => {
  return (
    <>
      <Label>{props.label}</Label>
      <Text type="text" placeholder={props.placeholder} />
    </>
  );
};

export default InputText;
