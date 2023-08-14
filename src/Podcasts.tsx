import styled from 'styled-components';
import PageTitle from './PageTitle';
import { BLUE, DARK_BLUE, VERY_LIGHT_GREY, WHITE } from 'styles/color';
import { SPACE_10, SPACE_20, SPACE_40 } from 'styles/spacing';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { getData } from 'contexts/DataContext';

/**
 * TODO - Decouple styles as gen component for al pages
 */
const PodcastsMain = styled.div`
  background-color: ${VERY_LIGHT_GREY};
  padding: ${SPACE_40};
  display: flex;
  justify-content: center;
`;

const PodCastAlphabetContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1224px;
`;

const PodCastAlphabetInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 25%;
`;

/**
 * TODO - Think of better name!
 */
const PodCastAlphabetSuperInnerContainer = styled.div`
  padding: 0px ${SPACE_20} ${SPACE_10};
`;

const LetterCategoryContainer = styled.div`
  background: ${BLUE};
  color: ${WHITE};
  font-weight: 600;
  padding: 3px 0;
  text-align: center;
  margin-bottom: ${SPACE_10};
`;

/**
 * TODO - Move to generic file
 */
const LinkNoDeco = styled(Link)`
  display: block;
  text-decoration: none;
  color: ${DARK_BLUE};
  line-height: 1.5;
`;

const Podcasts = () => {
  const alphabet = '#abcdefghijklmnopqrstuvwxyz';

  const { podcasts } = getData();

  /**
   * TODO - reformat `PodcastList` and set it via Context for all components
   */
  const PodcastList = useMemo(() => {
    if (!podcasts) return [];

    if (podcasts) {
      return (
        <PodCastAlphabetContainer>
          {alphabet.split('').map((letter) => {
            return (
              <PodCastAlphabetInnerContainer key={letter}>
                <PodCastAlphabetSuperInnerContainer>
                  <LetterCategoryContainer>{letter}</LetterCategoryContainer>
                  {
                    /**
                     * TODO - filter through both capitalized and lowercase podcasts
                     */
                    podcasts
                      .filter((item) =>
                        item.podcast_title.startsWith(letter.toUpperCase())
                      )
                      .map((item, idx) => {
                        /**
                         * TODO - move to formatUtil
                         */
                        const link = item.podcast_title
                          .toLocaleLowerCase()
                          .replaceAll(' ', '_');
                        return (
                          <LinkNoDeco key={item.id} to={`/podcasts/${link}`}>
                            {item.podcast_title}
                          </LinkNoDeco>
                        );
                      })
                  }
                </PodCastAlphabetSuperInnerContainer>
              </PodCastAlphabetInnerContainer>
            );
          })}
        </PodCastAlphabetContainer>
      );
    }
  }, [podcasts]);

  return (
    <div>
      <PageTitle title={'Browse all Podcasts'} />

      <PodcastsMain>{PodcastList}</PodcastsMain>
    </div>
  );
};
export default Podcasts;
