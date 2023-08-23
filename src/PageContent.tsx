import styled from 'styled-components/macro';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Podcasts from './Podcasts';
import Contact from './Contact';
import PodCastSingle from 'PodcastSingle';
import { useEffect, useState } from 'react';
import { Box, Drawer } from '@mui/material';

enum DrawerType {
  RIGHT_SIDE_MENU = 'right-side-menu',
}

const SideMenu = styled(Drawer)`
  z-index: 1090;
`;

const StyledBox = styled(Box)`
  z-index: 1090;
`;

const  PageContent = () => {

  const [sidebarNoticeActive, setSidebarNotice] = useState<boolean>(false);

  const sidebarToggle = () => {
    setSidebarNotice(!sidebarNoticeActive);
  };

  useEffect(() => {
    // setSidebarNotice(!sidebarNoticeActive);
    console.log(sidebarNoticeActive)
  }, [
    // setSidebarNotice,
    sidebarNoticeActive,
  ]);

  const anchorRight = 'right';
  // const drawerBleeding = 56;

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="podcasts" element={<Podcasts />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="podcasts/:name" element={<PodCastSingle />} />
      </Routes>
      <SideMenu
          data-testid={DrawerType.RIGHT_SIDE_MENU}
          anchor={anchorRight}
          open={sidebarNoticeActive}
          hideBackdrop={true}
          onClick={() => sidebarToggle()}
          style={{ zIndex: 190, overflow: 'auto' }}
          sx={{
            '& .MuiPaper-root': {
              overflow: 'initial',
              top: 0,
              marginTop: 'auto',
              bottom: 0,
              marginBottom: 'auto',
              height: '50%',
            },
          }}
          ModalProps={{
            keepMounted: true
          }}
        >
          <StyledBox
              sx={{
                position: 'absolute',
                right: '200px',
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                visibility: 'visible',
                left: 'auto',
                width: '100%',
                top: '50%',
                '& .MuiPaper-root': {
                  overflow: 'initial',
                },
              }}
            >
          <h1
            onClick={() => sidebarToggle()}
            >Psst! Over here! 🤫</h1>
        </StyledBox>
          <h1>Visit the real Podscripts site here!</h1>
        </SideMenu>
    </div>
  );
}

export default PageContent;
