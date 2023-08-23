// import { useMemo } from 'react';
import styled from 'styled-components/macro';
import { BLUE, WHITE } from 'styles/color';
import { getNav } from 'contexts/NavContext';
import { Link } from 'react-router-dom';
import { SPACE_10, SPACE_20 } from 'styles/spacing';
import Button from 'components/ui/Button';
import { useCallback } from 'react';
import { BodyText } from '../typography/BodyText';
import { fadeInOut } from 'styles/animations';

const ModalContent = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-box-align: center;
`;

const ModalInnerContent = styled.div`
    position: relative;
    overflow: hidden;
    margin: 200px 17px;
    align-self: flex-start;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: ${WHITE};
    overflow: auto;
    max-height: 100%;
    padding: ${SPACE_20};
`;


const WarningModalContainer = styled.div<{ $isVisible?: boolean }>`
    position: fixed;
    height: 100vh;
    width: 100%;
    transition: opacity 1s ease;
    z-index: 200;
    opacity: ${({ $isVisible }) => !!$isVisible ? 1 : 0};
    ${fadeInOut};
`;

const ModalOverlay = styled.div<OverlayProps>`
    position: absolute;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0,0.5);
`;

const mountedStyle = { animation: "inAnimation 250ms ease-in" };
const unmountedStyle = {
  animation: "outAnimation 270ms ease-out",
  animationFillMode: "forwards"
};

interface DialogProps {
    modalActive?: boolean,
}

interface OverlayProps {
    onClick?: () => void,
}

const WarningModal = (props: DialogProps) => {
    const { modalActive, setModalActive } = getNav();

    /**
     * Temp fix for now - adjust to be togglescroll
     */
    const unlockScroll = useCallback(() => {
        document.body.style.overflow = '';
      }, []);
    
    const handleClose = () => {
        setModalActive(false);
        unlockScroll();
    };

    
    return (
        <WarningModalContainer 
            $isVisible={modalActive}
            style={modalActive ? mountedStyle : unmountedStyle}
        >
            <ModalOverlay
                onClick={() => handleClose()}
             >
                <ModalContent>
                    <ModalInnerContent
                        onClick={e => e.stopPropagation()}
                    >
                        <h1>Hey!</h1>
                        <BodyText>
                            Thanks for visiting this site. Like really, thanks.
                        </BodyText>
                        <BodyText>
                            Just a little FYI, this is just a mockup of the real site, which you can find here:
                        </BodyText>
                        <Link to={`https://podscripts.co/`} target={"_blank"} style={{ textDecoration: 'none', marginTop: `${SPACE_10}` }}>
                            <Button
                                label={`Podscripts`}
                                backgroundColor={BLUE}
                                rounded={false}
                                />
                        </Link>
                    </ModalInnerContent>
                </ModalContent>
            </ModalOverlay>
        </WarningModalContainer>
    );
}

export default WarningModal;