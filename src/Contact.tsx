import Main from 'components/core/sections/page/MainContent';
import { BodyText } from 'components/core/typography/BodyText';
import Form from 'components/ui/forms/Form';
import ChevronRightIcon from 'components/ui/icons/ChevronRightIcon';
import EnvelopeIcon from 'components/ui/icons/EnvelopeIcon';
import UserIcon from 'components/ui/icons/UserIcon';
import styled from 'styled-components/macro';
import { BLUE, WHITE } from 'styles/color';
import { SPACE_40 } from 'styles/spacing';

const ContactWrapper = styled.div`
  ${Main};
`;

// TODO - Modularize with Submit and Login Registers components as well
const ContactFormWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  max-width: 612px;
  background-color: ${WHITE};
  flex: 1;
  padding: ${SPACE_40};
`;

const Contact = () => {

  return (
    <ContactWrapper>
      <ContactFormWrapper>
        <h1>Get In Touch</h1>
        <BodyText>Please use this form if you have a suggestion, noticed any bugs or for general inquiries.</BodyText>
        <Form 
          inputs={[
            {
              type: 'text',
              settings: {
                name: 'name',
                placeholder: 'Your Name',
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
              type: 'textarea',
              settings: {
                name: 'message',
                placeholder: 'Your Message',
              }
            },
            {
              type: 'submit',
              settings: {
                label: 'Send',
                backgroundColor: BLUE,
                icon: <ChevronRightIcon height={15} width={15} fill={WHITE} />,
              }
            }
          ]}
        />
      </ContactFormWrapper>
    </ContactWrapper>
  );
}

export default Contact;
