import Hamburger from 'hamburger-react';
import styled from 'styled-components/macro';
import { BLUE, WHITE } from 'styles/color';
import { SPACE_10 } from 'styles/spacing';

const MenuIconContainer = styled.div`
  background-color: ${BLUE};
  border-radius: 50%;
  margin: 0 0 0 ${SPACE_10};
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

interface ToggleIconProps {
  sidebarActive?: boolean;
  sidebarToggle: () => void;
}

const ToggleIcon = ({ ...props }: ToggleIconProps) => {
  const { sidebarActive, sidebarToggle } = props;

  return (
    <MenuIconContainer>
      <Hamburger
        toggled={sidebarActive}
        toggle={() => sidebarToggle()}
        size={25}
        color={`${WHITE}`}
      />
    </MenuIconContainer>
  );
};

export default ToggleIcon;
