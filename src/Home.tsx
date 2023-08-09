import styled from 'styled-components';
import PageTitle from './PageTitle';
import Podcast from 'components/sections/podcasts/Podcast';
import PODCASTS from 'mocks/PODCASTS.json';
import { VERY_LIGHT_GREY } from 'styles/color';
import { SPACE_40 } from 'styles/spacing';
import { useMemo } from 'react';
import Subtitle from 'components/core/sections/subtitle/Subtitle';

const PodcastParentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1224px;
  padding: 0;
  position: relative;
  z-index: 5;
`;

const HomeMain = styled.div`
  background-color: ${VERY_LIGHT_GREY};
  padding: ${SPACE_40};
`;


function Home() {
  
  const PodcastList = useMemo(() => {
    if (!PODCASTS) return [];

    if (PODCASTS) {
      return (
        <>
          {
            PODCASTS.map(item => {
              return (
                <Podcast key={item.id} title={item.podcast_title} />
              );
            })
          }
        </>
      );
    }
  }, [PODCASTS]);

  return (
    <div>
      <PageTitle
        title={
          'Find transcripts of your favourite podcasts with exact timestamps'
        }
      />
      <HomeMain>
        <Subtitle />
        <PodcastParentContainer>
          {PodcastList}
        </PodcastParentContainer>
      </HomeMain>
    </div>
  );
}
export default Home;
