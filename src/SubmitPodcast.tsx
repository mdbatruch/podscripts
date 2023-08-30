import Main from 'components/core/sections/page/MainContent';
import Form from 'components/ui/forms/Form';
import ChevronRightIcon from 'components/ui/icons/ChevronRightIcon';
import styled from 'styled-components/macro';
import { BLUE, WHITE } from 'styles/color';
import { SPACE_40 } from 'styles/spacing';

const SubmitWrapper = styled.div`
  ${Main};
`;

// TODO - Modularize with Contact and Login Registers components as well
const SubmitPodcastWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  max-width: 612px;
  background-color: ${WHITE};
  flex: 1;
  padding: ${SPACE_40};
`;

const SubmitPodcast = () => {

  return (
    <>
      <SubmitWrapper>
        <SubmitPodcastWrapper>
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
        </SubmitPodcastWrapper>
      </SubmitWrapper>
    </>
  );
}

export default SubmitPodcast;
