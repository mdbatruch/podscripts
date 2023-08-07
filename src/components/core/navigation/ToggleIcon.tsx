import styled from 'styled-components';
// import { Menu as MenuIcon } from '@mui/icons-material';
import Hamburger from 'hamburger-react'
import { BLUE, WHITE } from 'styles/color';
import { SPACE_10 } from 'styles/spacing';

const MenuIconContainer = styled.div`
  background-color: ${BLUE};
  border-radius: 50%;
  margin: 0 ${SPACE_10};
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

// const HamburgerMain = styled(Hamburger)`
//     background-color: ${BLUE};
//     color: ${BLUE};
//     margin: 3000px;
// `;

const ToggleIcon = (props: any) => {

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
