import styled from 'styled-components/macro';
import Main from 'components/core/sections/page/MainContent';
import { BLUE, WHITE } from 'styles/color';
import Form from 'components/ui/forms/Form';
import { BodyText } from 'components/core/typography/BodyText';
import UserIcon from 'components/ui/icons/UserIcon';
import EnvelopeIcon from 'components/ui/icons/EnvelopeIcon';
import ChevronRightIcon from 'components/ui/icons/ChevronRightIcon';

const ContactMain = styled.div`
  ${Main};
  background-color: ${WHITE};
  flex-direction: column;
`;

const Contact = () => {


  return (
    <ContactMain>
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
              icon: <ChevronRightIcon height={10} width={10} fill={WHITE} />,
            }
          }
        ]}
      />
    </ContactMain>
  );
}

export default Contact;
