import { Tabs } from '@mui/material';
import Tab from '@mui/material/Tab';
import Main from 'components/core/sections/page/MainContent';
import Form from 'components/ui/forms/Form';
import EnvelopeIcon from 'components/ui/icons/EnvelopeIcon';
import KeyIcon from 'components/ui/icons/KeyIcon';
import UserIcon from 'components/ui/icons/UserIcon';
import { ReactNode, SyntheticEvent, useCallback, useState } from 'react';
import styled from 'styled-components/macro';
import { BLUE, WHITE } from 'styles/color';
import { SPACE_40 } from 'styles/spacing';

const SignInWrapper = styled.div`
  ${Main};
`;

// TODO - Modularize with Submit and Contact components as well
const LoginRegisterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  max-width: 612px;
  background-color: ${WHITE};
  flex: 1;
  padding: ${SPACE_40};
`;

interface TabContentProps {
  value: number;
  index: number;
  children: ReactNode | string;
}

const TabContent = ({ value, index, children }: TabContentProps) => {
  return (
    <>
      {value == index && <>{children}</>}
    </>
  );
};

const SignIn = () => {

  /**
   * Set first tab active on default
   */
  const [value, setValue] = useState<number>(0);

  const handleChange = useCallback((e: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  }, [setValue]);

  return (
    <SignInWrapper>
      <LoginRegisterWrapper>
        <h1>Login or Register</h1>
        <Tabs
          value={value}
          onChange={handleChange}
        >
          <Tab label="Login" />
          <Tab label="Register" />
        </Tabs>
        <TabContent value={value} index={0}>
          <Form
              inputs={[
                {
                  type: 'text',
                  settings: {
                    name: 'name',
                    placeholder: 'Username or Email Address',
                    icon: <UserIcon height={20} width={20} fill={BLUE} />,
                  }
                },
                {
                  type: 'text',
                  settings: {
                    name: 'email',
                    placeholder: 'Password',
                    icon: <KeyIcon height={20} width={20} fill={BLUE} />,
                  }
                },
                {
                  type: 'submit',
                  settings: {
                    label: 'Login',
                    backgroundColor: BLUE,
                  }
                }
              ]}
            />
        </TabContent>
        <TabContent value={value} index={1}>
          <Form
            inputs={[
              {
                type: 'text',
                settings: {
                  name: 'name',
                  placeholder: 'First Name',
                  icon: <UserIcon height={20} width={20} fill={BLUE} />,
                }
              },
              {
                type: 'text',
                settings: {
                  name: 'username',
                  placeholder: 'Username',
                  icon: <UserIcon height={20} width={20} fill={BLUE} />,
                }
              },
              {
                type: 'text',
                settings: {
                  name: 'email',
                  placeholder: 'Email Address',
                  icon: <EnvelopeIcon height={20} width={20} fill={BLUE} />,
                }
              },
              {
                type: 'password',
                settings: {
                  name: 'password',
                  placeholder: 'Password',
                  icon: <KeyIcon height={20} width={20} fill={BLUE} />,
                }
              },
              {
                type: 'password',
                settings: {
                  name: 'confirm password',
                  placeholder: 'Confirm Password',
                  icon: <KeyIcon height={20} width={20} fill={BLUE} />,
                }
              },
              {
                type: 'submit',
                settings: {
                  label: 'Register',
                  backgroundColor: BLUE,
                }
              }
            ]}
          />
        </TabContent>
      </LoginRegisterWrapper>
    </SignInWrapper>
  );
}

export default SignIn;
