import { UIEvent, ReactNode } from 'react';
import styled from 'styled-components/macro';
import PodScriptsLogo from './ui/icons/logos/PodScriptsLogo';
import SearchToggle from './SearchToggle';
import { Link } from 'react-router-dom';

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
      <Link to="/">
        <PodScriptsLogo />
      </Link>
      <SearchToggle />
    </SearchContainer>
  );
};

export default SearchLogo;
