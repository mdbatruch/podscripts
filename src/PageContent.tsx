import { Box, Drawer } from '@mui/material';
import { BodyTextLight, BodyTextSmall } from 'components/core/typography/BodyText';
import Button from 'components/ui/Button';
import ShushingFaceIcon from 'components/ui/icons/ShushingFaceIcon';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BLUE, RED } from 'styles/color';
import { SPACE_10, SPACE_80 } from 'styles/spacing';

enum DrawerType {
  RIGHT_SIDE_MENU = 'right-side-menu',
}

const PageContent = () => {

  const [sidebarNoticeActive, setSidebarNotice] = useState<boolean>(false);

  const sidebarToggle = () => {
    setSidebarNotice(!sidebarNoticeActive);
  };

  const anchorRight = 'right';

  /**
   * TODO - Move Drawer component out of here and into separate file
   * 
   */
  return (
    <div>
      <Drawer
          data-testid={DrawerType.RIGHT_SIDE_MENU}
          anchor={anchorRight}
          open={sidebarNoticeActive}
          hideBackdrop={false}
          onClick={() => sidebarToggle()}
          style={{ zIndex: 100, overflow: 'auto' }}
          sx={{
            '& .MuiPaper-root': {
              overflow: 'initial',
              top: 0,
              marginTop: 'auto',
              bottom: 0,
              marginBottom: 'auto',
              height: 'fit-content',
              backgroundColor: RED,
              borderTopLeftRadius: 8,
              borderBottomLeftRadius: 8,
            },
          }}
          ModalProps={{
            keepMounted: true
          }}
        >
          <Box
              sx={{
                position: 'absolute',
                right: '100%',
                borderTopLeftRadius: 8,
                borderBottomLeftRadius: 8,
                visibility: 'visible',
                left: 'auto',
                width: '25%',
                top: 0,
                marginTop: 'auto',
                bottom: 0,
                marginBottom: 'auto',
                height: 'fit-content',
                backgroundColor: RED,
                color: '#fff',
                padding: SPACE_10,
                zIndex: 100,
                cursor: 'pointer',
                '& .MuiPaper-root': {
                  overflow: 'initial',
                },
              }}
            >
              <div
                onClick={() => sidebarToggle()}
                style={{ textAlign: 'center' }}
              >
                <BodyTextLight style={{ marginTop: '0px' }}>Psst!</BodyTextLight>
                <ShushingFaceIcon height={30} width={30} />
              </div>
              <BodyTextSmall
                style={{ textAlign: 'center' }}>Over here!</BodyTextSmall>
            </Box>
            <Box
                  sx={{
                    padding: SPACE_10,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    margin: `${SPACE_80} 0px`,
                  }}
                  onClick={e => e.stopPropagation()}
                >
              <BodyTextLight>Visit the real Podscripts site here!</BodyTextLight>
              <Link to={`https://podscripts.co/`} target={"_blank"} style={{ textDecoration: 'none' }}>
                  <Button
                      label={`Podscripts`}
                      backgroundColor={BLUE}
                      rounded={false}
                      />
              </Link>
            </Box>
          </Drawer>
    </div>
  );
}

export default PageContent;
