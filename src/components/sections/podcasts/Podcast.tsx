import { BodyText } from 'components/core/typography/BodyText';
import Button from 'components/ui/Button';
import { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { BLUE, DARK_BLUE } from 'styles/color';
import { SPACE_10, SPACE_20, SPACE_30 } from 'styles/spacing';
import { FONT_SIZE_14 } from 'styles/typography';
import { formatDate } from 'utils/DateUtil';

type PodcastProps = {
  title: string;
  category?: string;
  date?: string;
  description?: string;
  episodeCount?: number;
  url?: string;
  main: boolean;
};

export enum PodcastType {
  PODCAST_PARENT = 'podcast-parent',
}

export const PodcastParentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
  position: relative;
  z-index: 5;
`;

const PodcastContainer = styled.div`
  display: inline-block;
  margin-bottom: 12px;
  padding: 0 8px;
  vertical-align: top;
  flex: 1 1 30%;
`;

const PodcastContainerInner = styled.article`
  border: 1px solid #eee;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  height: 350px;
`;

const PodcastTitle = styled.h3`
  font-size: ${FONT_SIZE_14};
  font-weight: 600;
  margin-bottom: 10px;
  text-align: left;
  width: 100%;
`;

const PodcastImage = styled.div<{
  $backgroundImage: string;
}>`
  background-size: cover;
  background-image: url(${(props) => props.$backgroundImage});
  height: 182px;
  transition: all 2s cubic-bezier(0.19, 1, 0.22, 1) 0ms;
`;

const EpisodeCount = styled.div`
  left: 20px;
  position: absolute;
  top: 20px;
`;

const CategoryContainer = styled.div`
  left: 20px;
  position: absolute;
  top: -20px;
  padding: ${SPACE_10};
`;

const PodcastDescContainer = styled.div`
  padding: ${SPACE_30} ${SPACE_20} ${SPACE_10};
  position: relative;
`;

const DateContainer = styled.div`
  display: block;
  font-weight: 500;
  padding: 0 0 5px;
`;

/**
 * TODO - Move to generic file
 */
const LinkNoDeco = styled(Link)`
  text-decoration: none;
  color: ${DARK_BLUE};
`;

const Podcast = ({ description, title, date, main }: PodcastProps) => {

  // TODO - fix link
  const link = !!main ? `podcasts/` + encodeURIComponent(title.toLocaleLowerCase().replace(/\s/g, '_')) : encodeURIComponent(title.toLocaleLowerCase().replace(/\s/g, '_'));

  const formattedDate = useMemo(() => {
    const releaseDate = date;
    return releaseDate ? formatDate(date) : '';
  }
  , [date]);

  return (
    <PodcastContainer>
      <PodcastContainerInner>
        <PodcastImage
          $backgroundImage={
            'https://image.simplecastcdn.com/images/7d68c467-d3d7-41c3-b7c0-92218b530432/1e212407-6fba-4876-89d1-d6a9b5512794/3000x3000/show-cover-crimejunkiecj5-whitebackground.jpg?aid=rss_feed'
          }
        />
        <EpisodeCount>
          <Button label={'Episodes'} backgroundColor={BLUE} rounded={true} />
        </EpisodeCount>
        <PodcastDescContainer>
          <CategoryContainer>
            <Button label={'Category'} backgroundColor={BLUE} rounded={false} />
          </CategoryContainer>
          <PodcastTitle>
            <LinkNoDeco to={link}>{title}</LinkNoDeco>
          </PodcastTitle>
          {date ? (
            <DateContainer>
              Episode Date: {formattedDate}
            </DateContainer>
          ) : null }
          <BodyText>
            {description}
          </BodyText>
        </PodcastDescContainer>
      </PodcastContainerInner>
    </PodcastContainer>
  );
};

export default memo(Podcast);
