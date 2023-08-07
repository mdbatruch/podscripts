import { NavPageItem } from './core/navigation/NavPageItem';
import styled from 'styled-components';
import { TestId } from '../enums/testing';

import { MenuItems } from 'enums/menuItems';
// import { useEffect, useState } from 'react';
import { BLUE } from 'styles/color';
import { useIsMobile } from 'utils/mobileUtil';

const NavContainer = styled.ul<{ isMobile?: boolean }>`
  display: flex;
  ${({ isMobile }) => !!isMobile && `flex-direction: column; padding: 75px 0px 0px;` };
  ${({ isMobile }) => !isMobile && `padding: 0px;` };
  margin: 0px;
`;

const NavLiItem = styled.li<{ isMobile?: boolean }>`
  list-style: none;
  ${({ isMobile }) => !!isMobile && `
    border-top: 1px solid ${BLUE};
    &:last-child {
      border-bottom: 1px solid ${BLUE};
    }
  `}
`;

interface NavProps {
  mobileTrue?: boolean;
}

// const getIsMobile = () => window.innerWidth <= 768;

// const useIsMobile = () => {
//   const [isMobile, setIsMobile] = useState<boolean>(getIsMobile());

//   const onResize = () => {
//     setIsMobile(getIsMobile());
//   }

//   useEffect(() => {
//     setIsMobile(getIsMobile());
//   }, [onResize]);
  
//   window.addEventListener("resize", onResize);

//   return isMobile;
// };

const Nav = ({mobileTrue, ...props}: NavProps) => {

  const isMobile = useIsMobile();

  return (
    <NavContainer data-testid={TestId.NAV_CONTAINER} isMobile={isMobile}>
      {Object.values(MenuItems).map((item) => {
        return (
          <NavLiItem isMobile={isMobile}>
            <NavPageItem key={item.label} to={item.url} isMobile={isMobile}>
              {item.label}
            </NavPageItem>
          </NavLiItem>
        );
      })}
    </NavContainer>
  );
};

export default Nav;
