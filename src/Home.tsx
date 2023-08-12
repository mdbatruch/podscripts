import styled from 'styled-components';
import PageTitle from './PageTitle';
import Podcast from 'components/sections/podcasts/Podcast';
import PODCASTS from 'mocks/PODCASTS.json';
import { VERY_LIGHT_GREY } from 'styles/color';
import { SPACE_40 } from 'styles/spacing';
import { useMemo, useState } from 'react';
import Subtitle from 'components/core/sections/subtitle/Subtitle';
import Pagination, { PaginationType } from 'components/ui/Pagination';

enum PodcastType {
  PODCAST_PARENT = 'podcast-parent',
}

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

const PaginationParent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

function Home() {
  const PageSize = 15;

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return PODCASTS.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  /**
   * TODO - reformat `PodcastList` and set it via Context for all components
   */
  const PodcastList = useMemo(() => {
    if (!currentTableData) return [];

    if (currentTableData) {
      return (
        <>
          {currentTableData.map((item) => {
            return <Podcast key={item.id} title={item.podcast_title} />;
          })}
        </>
      );
    }
  }, [currentTableData]);

  return (
    <div>
      <PageTitle
        title={
          'Find transcripts of your favourite podcasts with exact timestamps'
        }
      />
      <HomeMain>
        <Subtitle />
        <div>
          <PodcastParentContainer data-testid={PodcastType.PODCAST_PARENT}>
            {PodcastList}
          </PodcastParentContainer>
          <PaginationParent data-testid={PaginationType.PAGINATION_PARENT}>
            <Pagination
              className={`pagination-bar`}
              currentPage={currentPage}
              totalCount={PODCASTS.length}
              pageSize={PageSize}
              onPageChange={(page: number) => setCurrentPage(page)}
            />
          </PaginationParent>
        </div>
      </HomeMain>
    </div>
  );
}
export default Home;
