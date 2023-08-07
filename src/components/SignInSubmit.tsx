import styled from 'styled-components';
import { BLUE, WHITE } from 'styles/color';
import { Link } from 'react-router-dom';
import PlusIcon from './ui/icons/PlusIcon';
import DoorIcon from './ui/icons/DoorIcon';
import Button from './ui/Button';
import { HeaderText } from './core/typography/HeaderText';
import { SPACE_20 } from 'styles/spacing';
// import { IconContainer } from './core/iconography/IconContainer';
// import { useState } from 'react';

const SubmitContainer = styled.div`
  display: none;
  margin: 0 ${SPACE_20};
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const SignInContainer = styled(Link)`
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

const Submit = () => {
  return (
    <Link to="/podcasts/:id" style={{ textDecoration: 'none' }}>
      <Button
        label={'Submit Podcast'}
        backgroundColor={`${BLUE}`}
        rounded={true}
        icon={<PlusIcon height={15} width={15} fill={`${WHITE}`} />}
      />
    </Link>
  );
};

export const SignIn = () => {
  return (
    <SignInContainer
      to="/loginregister"
    >
        <DoorIcon
        height={20} width={20} />
      <HeaderText>
        Sign In
      </HeaderText>
    </SignInContainer>
  );
};

const SignInSubmit = () => {
  return (
    <SubmitContainer>
      <Submit />
    </SubmitContainer>
  );
};

export default SignInSubmit;
