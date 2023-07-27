import { Box } from '@mui/material';
import styled from 'styled-components/macro';
import { BLUE, WHITE } from 'styles/color';
import { SPACE_10, SPACE_20 } from 'styles/spacing';

const Label = styled.div`
  display: inline-block;
  position: relative;
  padding: 0 5px 0 ${SPACE_20};
  border-radius: 50%;
  &:after {
    border-radius: 50%;
    position: absolute;
  }
  .radio-border {
    position: absolute;
    border-radius: 50%;
  }
`;

const Radio = styled.input`
  display: inline-block;
  height: ${SPACE_10};
  width: ${SPACE_10};
  border-radius: 50%;
  margin: 0px;
  bottom: 1px;
  position: relative;
  z-index: 2;
  &:focus {
    outline: none;
  }
`;

const RadioBorder = styled.div`
  display: inline-block;
  height: ${SPACE_10};
  outline: 3px solid ${BLUE};
  width: ${SPACE_10};
  border-radius: 50%;
  position: relative;
  left: 11px;
  padding: 1px;
  z-index: 1;
`;

interface InputRadioProps {
  value: string;
  label: string;
  checked: boolean;
  onChange: (e: any) => void;
}

export const InputRadio = ({
  value,
  label,
  checked,
  onChange,
  ...props
}: InputRadioProps) => {
  return (
    <>
      <Label>{label}</Label>
      <RadioBorder></RadioBorder>
      <Radio type="radio" name="radio" onChange={onChange} {...props} />
    </>
  );
};

export default InputRadio;
