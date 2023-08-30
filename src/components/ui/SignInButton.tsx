import { HeaderText } from 'components/core/typography/HeaderText';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { BLUE, WHITE } from 'styles/color';
import { SPACE_20 } from 'styles/spacing';
import DoorIcon from './icons/DoorIcon';

export const SignInContainer = styled(Link)`
  display: flex;
  align-items: center;
  color: ${WHITE};
  text-decoration: none;
  svg {
    fill: ${WHITE};
    margin-right: ${SPACE_20};
    transition: all 0.2s ease-in-out;
  }
  &:hover {
    svg {
      fill: ${BLUE};
      transform: rotateY(180deg);
    }
    div {
      color: ${BLUE};
    }
  }
`;

const SignInButton = () => {
  return (
    <SignInContainer to="/loginregister">
      <DoorIcon height={20} width={20} />
      <HeaderText>Sign In</HeaderText>
    </SignInContainer>
  );
};

export default SignInButton;
