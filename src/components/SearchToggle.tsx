import { useContext } from 'react';
import styled from 'styled-components';
import SearchIcon from './ui/icons/SearchIcon';
import { BLUE, GREY_MAIN, WHITE } from '../styles/color';
import { SPACE_10, SPACE_20 } from '../styles/spacing';
import { AppContext } from 'App';

const SearchToggleContainer = styled.div`
  color: ${WHITE};
  display: flex;
  position: relative;
  margin-left: ${SPACE_10};
  padding-left: ${SPACE_10};
  &::before {
    background: ${GREY_MAIN};
    bottom: -6px;
    content: '';
    left: 0;
    position: absolute;
    top: -6px;
    width: 1px;
  }
`;

const SearchText = styled.div`
  padding: 0px ${SPACE_20};
  cursor: pointer;
`;

const SearchToggle = () => {
  const { show } = useContext(AppContext);

  return (
    <SearchToggleContainer>
      <SearchIcon color={BLUE} />
      <SearchText onClick={() => show()}>Search</SearchText>
    </SearchToggleContainer>
  );
};

export default SearchToggle;
