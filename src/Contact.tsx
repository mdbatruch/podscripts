import styled from 'styled-components/macro';
import PageTitle from './PageTitle';
import Main from 'components/core/sections/page/MainContent';
import { WHITE } from 'styles/color';
// import { Form } from 'react-router-dom';

const ContactMain = styled.div`
  ${Main};
  background-color: ${WHITE};
  flex-direction
`;

function Contact() {
  return (
    <div>
      <PageTitle title={'Get in Touch'} />

      <ContactMain>
        {/* <Form>
        <h3>Get In Touch</h3>
        <h5>Please use this form if you have a suggestion, noticed any bugs or for general inquiries.</h5>
      </Form> */}
      </ContactMain>
    </div>
  );
}
export default Contact;
