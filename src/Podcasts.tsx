import Main from 'components/core/sections/page/MainContent';
import { getData } from 'contexts/DataContext';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { BLUE, DARK_BLUE, WHITE } from 'styles/color';
import { SPACE_10, SPACE_20 } from 'styles/spacing';
import { FONT_SIZE_14 } from 'styles/typography';
import PageTitle from './PageTitle';

const PodcastsWrapper = styled.div`
  ${Main};
  background-color: ${WHITE};
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
  font-size: ${FONT_SIZE_14};
  line-height: 1.5;
`;

const Podcasts = () => {
  const alphabet = '#abcdefghijklmnopqrstuvwxyz';

  const { podcasts } = getData();

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
                        item.title.startsWith(letter.toUpperCase())
                      )
                      .map((item, idx) => {
                        /**
                         * TODO - move to formatUtil
                         */
                        const link = item.title
                          .toLocaleLowerCase()
                          .replaceAll(' ', '_');

                        return (
                          <LinkNoDeco key={item.id} to={`/podcasts/${link}`}>
                            {item.title}
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

      <PodcastsWrapper>{PodcastList}</PodcastsWrapper>
    </div>
  );
};
export default Podcasts;
