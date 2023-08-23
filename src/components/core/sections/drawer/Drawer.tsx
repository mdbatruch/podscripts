import { useState } from "react";

/**
 * WIP - Unsure if needed or not yet
 */

enum DrawerType {
    TOP_MENU = 'top-menu',
    LEFT_SIDE_MENU = 'left-side-menu',
    RIGHT_SIDE_MENU = 'right-side-menu',
  }

enum Anchor {
    TOP = 'top',
    LEFT = 'left',
    RIGHT = 'right',
}

interface DrawerProps {
    testId: string,
    anchor: string,
}

const Drawer = (props: DrawerProps ) => {

    const { anchor, testId } = props;

    const [drawerActive, setDraweractive] = useState<boolean>(false);
  
    const sidebarToggle = () => {
        setDraweractive(!drawerActive);
    };

    console.log(testId, anchor);
  
    return (
      <div>
        {/* <RightMenu
            data-testid={DrawerType.RIGHT_SIDE_MENU}
            anchor={anchorRight}
            open={sidebarNoticeActive}
            hideBackdrop={false}
            onClick={() => sidebarToggle()}
            style={{ zIndex: 190, overflow: 'auto' }}
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
            <StyledBox
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
                  cursor: 'pointer',
                  '& .MuiPaper-root': {
                    overflow: 'initial',
                  },
                }}
              >
                <BodyTextLight
                  onClick={() => sidebarToggle()}
                  style={{ textAlign: 'center' }}
                >
                  <h3 style={{ marginTop: '0px' }}>Psst!</h3>
                  <ShushingFaceIcon height={30} width={30} />
                  <BodyTextSmall>Over here!</BodyTextSmall>
                </BodyTextLight>
              </StyledBox>
              <StyledBox
                    sx={{
                      padding: SPACE_10,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      margin: `${SPACE_80} 0px`,
                    }}
                  >
                <BodyTextLight>Visit the real Podscripts site here!</BodyTextLight>
                <Link to={`https://podscripts.co/`} target={"_blank"} style={{ textDecoration: 'none' }}>
                    <Button
                        label={`Podscripts`}
                        backgroundColor={BLUE}
                        rounded={false}
                        />
                </Link>
              </StyledBox>
            </RightMenu> */}
      </div>
    );
  }
  
  export default Drawer;