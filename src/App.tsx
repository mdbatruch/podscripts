import { useEffect, useState } from 'react';
import PageContent from './PageContent';
import Nav from './components/Nav';
import SearchLogo from './components/SearchLogo';
import styled from 'styled-components/macro';
import './index.css';
import Drawer from '@mui/material/Drawer';
import NavSearchInner from 'components/NavSearchInner';
import SideBar from 'components/SideBar';
import ToggleIcon from 'components/core/navigation/ToggleIcon';
import { SPACE_20 } from 'styles/spacing';
import { useIsMobile } from 'utils/mobileUtil';
import SignIn from 'components/ui/SignIn';
import Submit from 'components/Submit';
import { getNav } from 'contexts/NavContext';
// import { Box, Modal, Typography } from '@mui/material';
// import { BLACK, WHITE } from 'styles/color';
// import { Link } from 'react-router-dom';

enum HeaderType {
  HEADER_PARENT = 'header-parent',
  TOP_MENU = 'top-menu',
  SIDE_MENU = 'side-menu',
}

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: #333;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.12);
  height: 75px;
  left: 0;
  padding: 0 0;
  position: sticky;
  top: 0;
  -webkit-transform: translateZ(0);
  width: 100%;
  z-index: 100;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

const NavSearch = styled.div`
  height: 100%;
  position: absolute;
  transition: all 0.5s ease;
`;

const NavContainer = styled.div`
  margin: 0 ${SPACE_20} 0 0;
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const TopMenu = styled(Drawer)``;

const SideMenu = styled(Drawer)`
  z-index: 90;
`;

// const BoxContainer = styled(Box)`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   width: 400;
//   background-color: ${WHITE};
//   border: 2px solid ${BLACK};
//   padding: ${SPACE_10};
// `;

const App = () => {
  const isMobile = useIsMobile();
  const { show } = getNav();

  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  useEffect(() => {
    if (!isMobile) {
      setSidebarActive(false);
    }
    setIsShowing(show);

    // setOpen(!open)
  }, [
    isMobile,
    show,
    //  setOpen
  ]);

  const [isShowing, setIsShowing] = useState<boolean>(false);
  const [sidebarActive, setSidebarActive] = useState<boolean>(false);

  const anchor = 'top';
  const anchorLeft = 'left';

  const sidebarToggle = () => {
    setSidebarActive(!sidebarActive);
  };

  return (
    <div className="App">
      {/**
       * TODO - look in to custom modal
       */}
      {/* <div>
          My Modal
        </div>
        <Modal
          open={open}
          onClose={() => handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <BoxContainer>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Hey!
              <br/>
              Thanks for visiting this site.
            </Typography>
            <Typography id="modal-modal-description">
              Just a little FYI, this is just a mockup of the real site, which you can find here:
              <Link to={`https://podscripts.co/`} target={"_blank"}>https://podscripts.co/</Link>
            </Typography>
          </BoxContainer>
        </Modal> */}
      <Header data-testid={HeaderType.HEADER_PARENT} className="header">
        <SearchLogo />
        <NavContainer>
          <Nav mobileTrue={false} />
        </NavContainer>
        <SignIn />
        <Submit />
        <SideMenu
          data-testid={HeaderType.SIDE_MENU}
          anchor={anchorLeft}
          open={sidebarActive}
          hideBackdrop={true}
          onClick={() => sidebarToggle()}
          style={{ zIndex: 90 }}
        >
          <SideBar />
        </SideMenu>
        <ToggleIcon
          sidebarToggle={sidebarToggle}
          sidebarActive={sidebarActive}
        />
      </Header>
      <NavSearch>
        <TopMenu
          data-testid={HeaderType.TOP_MENU}
          anchor={anchor}
          open={isShowing}
          elevation={2}
          onClose={() => setIsShowing(false)}
          style={{ zIndex: 90 }}
          sx={{
            '& .MuiPaper-root': {
              top: '75px',
              margin: 'auto',
              maxWidth: '90%',
              padding: `${SPACE_20}`,
              boxShadow: `0 7px 0 5px rgba(0,0,0,.2)`,
              overflowY: 'inherit',
            },
          }}
        >
          <NavSearchInner />
        </TopMenu>
      </NavSearch>
      <PageContent />
    </div>
  );
};

export default App;
