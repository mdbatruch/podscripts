import styled from 'styled-components';
// import { SPACE_20 } from "styles/spacing";
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

// const SideBarListItem = styled.div`
//     display: block;
//     padding: ${SPACE_20} 0;
//     position: relative;
// `;

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
