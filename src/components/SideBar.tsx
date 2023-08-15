import styled from 'styled-components/macro';
import Nav from './Nav';

const SideBarContainer = styled.div`
  background: #333;
  bottom: 0;
  height: 100%;
  left: -300px;
  margin: 0;
  min-height: 100%;
  overflow-y: scroll;
  top: 0;
  transition: all 0.5s;
  width: 280px;
  z-index: 101;
  overflow: hidden;
`;

const NavParent = styled.div`
  position: relative;
  text-align: center;
`;

const SideBar = () => {
  return (
    <SideBarContainer className="sidebar" id="citiesId">
      <NavParent>
        <Nav mobileTrue={true} />
      </NavParent>
    </SideBarContainer>
  );
};

export default SideBar;
