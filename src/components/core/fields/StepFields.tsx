import { StepFieldType } from 'enums/stepFieldTypes';
import InputText from 'components/ui/forms/InputText';
import InputRadio from 'components/ui/forms/InputRadio';

const StepFields = (
  type: any,
  label?: string,
  placeholder?: string,
  onChange?: void,
  checked?: boolean,
  value?: string
) => {
  switch (type.type) {
    case StepFieldType.TEXT:
      return <InputText label={type.label} placeholder={type.placeholder} />;
    case StepFieldType.RADIO:
      return (
        <InputRadio
          label={type.label}
          onChange={type.onChange}
          value={type.value}
          checked={type.checked}
        />
      );
    default:
      return <h1>nothing</h1>;
  }
};

export default StepFields;
