import { ReactNode, UIEvent } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { SPACE_20 } from 'styles/spacing';
import SearchToggle from './SearchToggle';
import PodScriptsLogo from './ui/icons/logos/PodScriptsLogo';

const SearchContainer = styled.div`
  padding: ${SPACE_20} 0;
  display: flex;
  align-items: center;
  margin-right: auto;
`;

export interface SearchLogoProps {
  conten?: ReactNode;
  onClick?: (e: UIEvent<HTMLElement>) => void;
  footer?: boolean;
}

const SearchLogo = ({ footer }: SearchLogoProps) => {
  return (
    <SearchContainer>
      <Link to="/">
        <PodScriptsLogo />
      </Link>
      { footer ?? (
        <SearchToggle />
      )}
    </SearchContainer>
  );
};

export default SearchLogo;
