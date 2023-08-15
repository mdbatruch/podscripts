import { HeaderText } from 'components/core/typography/HeaderText';
import DoorIcon from './icons/DoorIcon';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { WHITE, BLUE } from 'styles/color';
import { SPACE_20 } from 'styles/spacing';

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

const SignIn = () => {
  return (
    <SignInContainer to="/loginregister">
      <DoorIcon height={20} width={20} />
      <HeaderText>Sign In</HeaderText>
    </SignInContainer>
  );
};

export default SignIn;
