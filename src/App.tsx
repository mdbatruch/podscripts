import { useEffect, useState } from 'react';
import PageContent from './PageContent';
// import Header from './Header';
import Nav from './components/Nav';
import SearchLogo from './components/SearchLogo';
import styled from 'styled-components';
import './index.css';
import Drawer from '@mui/material/Drawer';
import NavSearchInner from 'components/NavSearchInner';
import SideBar from 'components/SideBar';
import ToggleIcon from 'components/core/navigation/ToggleIcon';
import { SPACE_20 } from 'styles/spacing';
import SignInSubmit from 'components/SignInSubmit';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
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

const App = () => {
  const [isShowing, setIsShowing] = useState<boolean>(false);
  const [sidebarActive, setSidebarActive] = useState<boolean>(false);

  const anchor = 'top';
  const anchorLeft = 'left';

  useEffect(() => {}, [isShowing]);

  const show = () => {
    setIsShowing(!isShowing);
  };

  const sidebarToggle = () => {
    setSidebarActive(!sidebarActive);
  };

  return (
    <div className="App">
      <Header className="header">
        <SearchLogo show={show} />
        <NavContainer>
          <Nav />
          <SignInSubmit />
        </NavContainer>
        <Drawer
          anchor={anchorLeft}
          open={sidebarActive}
          onClose={() => setSidebarActive(false)}
          hideBackdrop={true}
        >
          <SideBar />
        </Drawer>
        <ToggleIcon sidebarToggle={sidebarToggle} />
      </Header>
      <NavSearch>
        <TopMenu
          anchor={anchor}
          open={isShowing}
          onClose={() => setIsShowing(false)}
          sx={{
            '& .MuiPaper-root': {
              bgcolor: 'transparent',
              boxShadow: 'none',
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
