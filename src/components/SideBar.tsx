import styled from 'styled-components';
// import { SPACE_20 } from "styles/spacing";
import Nav from './Nav';

const SideBarContainer = styled.div`
  background: #333;
  bottom: 0;
  height: 100%;
  left: -300px;
  margin: 80px 0 0;
  min-height: 100%;
  overflow-y: scroll;
  top: 0;
  transition: all 0.5s;
  width: 280px;
  z-index: 101;
`;

// const SideBarListItem = styled.div`
//     display: block;
//     padding: ${SPACE_20} 0;
//     position: relative;
// `;

const SideBar = () => {
  return (
    <SideBarContainer className="sidebar" id="citiesId">
      <div className="navage-sidebar">
        <Nav />
      </div>
    </SideBarContainer>
  );
};

export default SideBar;
