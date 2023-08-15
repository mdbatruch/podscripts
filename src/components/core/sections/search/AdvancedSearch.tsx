import Button from 'components/ui/Button';
import InputText from 'components/ui/forms/InputText';
import MinusIcon from 'components/ui/icons/MinusIcon';
import PlusIcon from 'components/ui/icons/PlusIcon';
import { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { BLACK, BLUE, LIGHT_GREY, WHITE } from 'styles/color';
import { SPACE_20 } from 'styles/spacing';

enum SearchPlaceholder {
  ADD_KEYWORD = 'Add Keyword',
  REMOVE_KEYWORD = 'Remove Keyword',
}

const AdvancedTextSearchContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  > * {
    flex-basis: 50%;
    box-sizing: border-box;
  }
`;

const KeywordButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: ${SPACE_20} 0;
`;

const AdvancedSearch = () => {
  let addQueryTag: boolean;
  let removeQueryTag: boolean;

  const [inputList, setInputList] = useState<JSX.Element[]>([
    <InputText key={0} placeholder={'Keyword'} />,
    <InputText key={1} placeholder={'Keyword'} />,
  ]);

  addQueryTag = inputList.length < 6;
  removeQueryTag = inputList.length > 2;

  const addKeywords = (e: void) => {
    if (inputList.length < 6) {
      setInputList(
        inputList.concat(
          <InputText key={inputList.length + 2} placeholder={'Keyword'} />
        )
      );
    }
  };

  const removeKeywords = (e: void) => {
    if (inputList.length >= 2) {
      setInputList(inputList.slice(0, -1));
    }
  };

  useEffect(() => {
    if (inputList.length < 6) {
      addQueryTag = true;
    } else {
      addQueryTag = false;
    }

    if (inputList.length > 2) {
      removeQueryTag = false;
    } else {
      removeQueryTag = true;
    }
  }, [inputList]);

  return (
    <>
      <p>Use a Combination of keywords to find episodes</p>
      <KeywordButtonContainer>
        <Button
          label={SearchPlaceholder.ADD_KEYWORD}
          backgroundColor={BLUE}
          rounded={true}
          icon={<PlusIcon height={20} width={20} fill={WHITE} />}
          onClick={() => addKeywords()}
          isDisabled={!addQueryTag}
        />
        <Button
          label={SearchPlaceholder.REMOVE_KEYWORD}
          color={BLACK}
          backgroundColor={LIGHT_GREY}
          rounded={true}
          icon={<MinusIcon height={20} width={20} fill={BLACK} />}
          onClick={() => removeKeywords()}
          isDisabled={!removeQueryTag}
        />
      </KeywordButtonContainer>
      <AdvancedTextSearchContainer>{inputList}</AdvancedTextSearchContainer>
    </>
  );
};

export default AdvancedSearch;
