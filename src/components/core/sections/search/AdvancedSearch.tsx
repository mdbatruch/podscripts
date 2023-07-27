import Button from 'components/ui/Button';
import InputText from 'components/ui/forms/InputText';
import PlusIcon from 'components/ui/icons/PlusIcon';
import styled from 'styled-components';
import { BLUE, WHITE } from 'styles/color';

const AdvancedSearch = (props: any) => {
  return (
    <>
      <p>Use a Combination of keywords to find episodes</p>
      <InputText placeholder={'Select Podcasts First'} />
      <Button
        label={'Add Keyword'}
        backgroundColor={BLUE}
        rounded={true}
        icon={<PlusIcon height={20} width={20} fill={`${WHITE}`} />}
      />
    </>
  );
};

export default AdvancedSearch;
