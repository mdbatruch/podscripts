import { NavPageItem } from './core/navigation/NavPageItem';
import styled from 'styled-components/macro';
import { TestId } from '../enums/testing';
import { MenuItems } from 'enums/menuItems';
import { BLUE } from 'styles/color';
import { useIsMobile } from 'utils/mobileUtil';
import { FONT_SIZE_14 } from 'styles/typography';
import { Link } from 'react-router-dom';

const NavContainer = styled.ul<{ $isMobile?: boolean }>`
  display: flex;
  ${({ $isMobile }) =>
    !!$isMobile && `flex-direction: column; padding: 75px 0px 0px;`};
  ${({ $isMobile }) => !$isMobile && `padding: 0px;`};
  margin: 0px;
`;

const NavLiItem = styled(Link)<{ $isMobile?: boolean }>`
  list-style: none;
  font-size: ${FONT_SIZE_14};
  text-decoration: none;
  ${({ $isMobile }) =>
    !!$isMobile &&
    `
    border-top: 1px solid ${BLUE};
    &:last-child {
      border-bottom: 1px solid ${BLUE};
    }
  `}
`;

interface NavProps {
  mobileTrue?: boolean;
}

const Nav = (props: NavProps) => {
  const isMobile = useIsMobile();

  return (
    <NavContainer data-testid={TestId.NAV_CONTAINER} $isMobile={isMobile}>
      {Object.values(MenuItems).map((item) => {
        return (
          <NavLiItem key={item.label} to={item.url} $isMobile={isMobile}>
            <NavPageItem to={item.url} $isMobile={isMobile}>
              {item.label}
            </NavPageItem>
          </NavLiItem>
        );
      })}
    </NavContainer>
  );
};

export default Nav;
