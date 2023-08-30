import { getNav } from 'contexts/NavContext';
import styled from 'styled-components/macro';
import { BLUE, GREY_MAIN, WHITE } from '../styles/color';
import { SPACE_10, SPACE_20 } from '../styles/spacing';
import { HeaderText } from './core/typography/HeaderText';
import SearchIcon from './ui/icons/SearchIcon';

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

const SearchText = styled(HeaderText)`
  padding: 0px ${SPACE_20};
  cursor: pointer;
`;

const SearchToggle = () => {
  const { show, setIsShow } = getNav();

  return (
    <SearchToggleContainer>
      <SearchIcon color={BLUE} />
      <SearchText onClick={() => setIsShow(!show)}>Search</SearchText>
    </SearchToggleContainer>
  );
};

export default SearchToggle;
