import styled from 'styled-components/macro';
import PageTitle from './PageTitle';
import Main from 'components/core/sections/page/MainContent';
import { BodyText } from 'components/core/typography/BodyText';

const AboutMain = styled.div`
  ${Main};
`;

const About = () => {
  return (
    <>
      <PageTitle title={'About PodScripts'} />
      <AboutMain>
        <div>
          <BodyText>
            PodScripts is dedicated to providing transcriptions for a wide
            variety of popular podcasts. We understand that not everyone has the
            time or ability to listen to podcasts, but still wants to stay
            informed and engaged with their favorite shows. That's why we've
            created this platform, to make it easy for you to follow along with
            the content in a way that suits you best.
          </BodyText>
          <BodyText>
            Our transcripts are created using state-of-the-art speech-to-text
            technology, which is highly accurate but still not perfect. We
            strive to provide the most accurate transcriptions possible, but
            please note that there may be occasional errors or inaccuracies. We
            apologize for any inconvenience this may cause, and we encourage you
            to listen to the original audio if you're looking for 100% accuracy.
          </BodyText>
          <BodyText>
            We believe that podcast transcriptions can be a valuable resource
            for busy professionals, language learners, and anyone looking to
            gain new insights from their favorite shows. We're constantly adding
            new transcripts to our website, so be sure to check back often for
            new content.
          </BodyText>
          <BodyText>
            One of the unique features of our website is the ability for users
            to engage in discussions and leave comments on specific sentences
            and lines from the transcripts. This allows for a deeper level of
            engagement and understanding of the content, as users can share
            their thoughts, ask questions and provide additional context on
            certain parts of the podcast. Whether you're looking to connect with
            other fans of the show, or simply want to gain a better
            understanding of a particular topic, this feature is designed to
            make the experience of reading the transcripts even more interactive
            and engaging. We believe that this added layer of discussion and
            community engagement will enhance the overall listening experience
            and help users to get the most out of their favorite podcasts.
          </BodyText>
        </div>
      </AboutMain>
    </>
  );
};
export default About;
