import Main from 'components/core/sections/page/MainContent';
import ChevronRightIcon from 'components/ui/icons/ChevronRightIcon';
import Form from 'components/ui/forms/Form';
import styled from 'styled-components/macro';
import { BLUE, WHITE } from 'styles/color';

const SubmitMain = styled.div`
  ${Main};
  flex-direction: column;
`;

const SubmitPodcast = () => {

  return (
    <>
      <SubmitMain>
        <h1>Submit a Podcast for Transcription</h1>
        <Form 
          inputs={[
            {
              type: 'text',
              settings: {
                name: 'Podcast Name',
                placeholder: 'Podcast Name',
                label: 'Podcast Name',
              }
            },
            {
              type: 'text',
              settings: {
                name: 'Podcast RSS Feed URL (Optional)',
                placeholder: 'Podcast RSS Feed URL (Optional)',
                label: 'Podcast RSS Feed URL (Optional)',
              }
            },
            {
              type: 'text',
              settings: {
                name: 'Your Email',
                placeholder: 'Your Email',
                label: 'Your Email',
              }
            },
            {
              type: 'submit',
              settings: {
                label: 'Submit Podcast',
                backgroundColor: BLUE,
                icon: <ChevronRightIcon height={15} width={15} fill={WHITE} />,
              }
            }
          ]}
        />
      </SubmitMain>
    </>
  );
}

export default SubmitPodcast;
