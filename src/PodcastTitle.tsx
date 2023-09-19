import Main from 'components/core/sections/page/MainContent';
import Podcast, { PodcastParentContainer, PodcastType } from 'components/sections/podcasts/Podcast';
import Pagination from 'components/ui/Pagination';
import { PaginationType } from 'components/ui/Pagination';
import { getData } from 'contexts/DataContext';
import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components/macro';
import { BLUE, WHITE } from 'styles/color';
import { SPACE_40 } from 'styles/spacing';
import { FONT_SIZE_18, FONT_SIZE_30 } from 'styles/typography';
import BreadCrumbs, { BreadcrumbsTopWrapper, formatPagePath } from 'utils/BreadcrumbUtil';
import { PaginationParent } from 'utils/PaginationUtil';

const PodcastTitleWrapper = styled.div`
    ${Main};
    background-color: ${WHITE};
    flex-direction: column;
    margin-bottom: ${SPACE_40};
`;

const PodcastTitleHeader = styled.div`
    background-color: ${WHITE};
    flex-direction: column;
    padding: 0 ${SPACE_40} ${SPACE_40};
`;

const Title = styled.h1`
  position: relative;
  &::before {
      background: ${BLUE};
      border-radius: 4px;
      bottom: -13px;
      content: '';
      height: 4px;
      left: 0;
      position: absolute;
      right: 0;
      display: block;
      width: 50px;
  }
}
`;

const ListContainer = styled(PodcastParentContainer)`
  background-color: ${WHITE};
`;

const NoItemsContainer = styled.div`
  text-align: center;
`;

const NoItemsTitle = styled.h2`
  font-size: ${FONT_SIZE_30};
`;

const NoItemsContent = styled.p`
  font-size: ${FONT_SIZE_18};
`;

const PodcastTitle = () => {
  const PageSize = 9;
  const { name } = useParams();
  const { episodes } = getData();
  const [currentPage, setCurrentPage] = useState<number>(1);

  const newItem = useMemo(() => formatPagePath(name), [name]);

  const matchingPodcasts = useMemo(() => { return episodes.filter(item => item.series?.includes(newItem)) }, [episodes, newItem]);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return matchingPodcasts.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, matchingPodcasts]);

  /**
   * TODO - reformat `PodcastList` and set it via Context for all components
   */
  const PodcastList = useMemo(() => {
    if (!currentTableData) return [];

    return currentTableData.length > 0 ? (
      <>
        {currentTableData.map((item) => {
          return <Podcast
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  url={item.episode_url_slug}
                  date={item.release_date || ''}
                  main={false}
                />;
        })}
      </>
      ) : (
        <NoItemsContainer>
          <NoItemsTitle>Whoops...</NoItemsTitle>
            <NoItemsContent>
              ¯\_(ツ)_/¯
            </NoItemsContent>
            <NoItemsContent>Looks like there's nothing here, maybe come back later for updates?</NoItemsContent>
        </NoItemsContainer>
      );
  }, [currentTableData]);

  return (
    <>
      <BreadcrumbsTopWrapper>
        <BreadCrumbs />
      </BreadcrumbsTopWrapper>
      <PodcastTitleWrapper>
        <PodcastTitleHeader>
          <Title>{newItem}</Title>
        </PodcastTitleHeader>
        <ListContainer data-testid={PodcastType.PODCAST_PARENT}>
            {PodcastList}
        </ListContainer>
        <PaginationParent data-testid={PaginationType.PAGINATION_PARENT}>
              <Pagination
                className={`pagination-bar`}
                currentPage={currentPage}
                totalCount={matchingPodcasts.length}
                pageSize={PageSize}
                onPageChange={(page: number) => setCurrentPage(page)}
              />
            </PaginationParent>
      </PodcastTitleWrapper>
    </>
  );
}
export default PodcastTitle;
