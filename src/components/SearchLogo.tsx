import { UIEvent, ReactNode } from 'react';
import styled from 'styled-components';
import PodScriptsLogo from './ui/icons/logos/PodScriptsLogo';
import SearchToggle from './SearchToggle';

const SearchContainer = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  margin-right: auto;
`;

export interface SearchLogoProps {
  content: ReactNode;
  onClick: (e: UIEvent<HTMLElement>) => void;
}

const SearchLogo = () => {
  return (
    <SearchContainer>
      <PodScriptsLogo />
      <SearchToggle />
    </SearchContainer>
  );
};

export default SearchLogo;
