import { useCallback, useEffect, useState } from 'react';
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
import WarningModal from 'components/core/navigation/WarningModal';
import Footer from 'components/core/sections/footer/Footer';

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

const App = () => {
  const isMobile = useIsMobile();
  const { show, setIsShow, modalActive, setModalActive } = getNav();

  const lockScroll = useCallback(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setSidebarActive(false);
    }
    setIsShow(show);
  }, [
    isMobile,
    show
  ]);

  useEffect(() => {
    setTimeout( () => {
      setModalActive(prevModalActive => !modalActive);
      lockScroll();
    }, 2000);
  }, [
    setModalActive
  ]);

  const [sidebarActive, setSidebarActive] = useState<boolean>(false);

  const anchor = 'top';
  const anchorLeft = 'left';

  const sidebarToggle = useCallback(() => {
    setSidebarActive(!sidebarActive);
  }, [sidebarActive]);

  return (
    <div className="App">
      { modalActive && (
        <WarningModal modalActive={modalActive}/>
      )}
      <Header data-testid={HeaderType.HEADER_PARENT} className="header">
        <SearchLogo />
        <NavContainer>
          <Nav mobileTrue={false} />
        </NavContainer>
        <SignIn />
        <Submit />
        <Drawer
          data-testid={HeaderType.SIDE_MENU}
          anchor={anchorLeft}
          open={sidebarActive}
          hideBackdrop={true}
          onClick={() => sidebarToggle()}
          style={{ zIndex: 90 }}
        >
          <SideBar />
        </Drawer>
        <ToggleIcon
          sidebarToggle={sidebarToggle}
          sidebarActive={sidebarActive}
        />
      </Header>
      <NavSearch>
        <Drawer
          data-testid={HeaderType.TOP_MENU}
          anchor={anchor}
          open={show}
          elevation={2}
          onClose={() => setIsShow(false)}
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
        </Drawer>
      </NavSearch>
      <PageContent />
      <Footer />
    </div>
  );
};

export default App;

