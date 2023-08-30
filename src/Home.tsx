import Main from 'components/core/sections/page/MainContent';
import Subtitle from 'components/core/sections/subtitle/Subtitle';
import Podcast from 'components/sections/podcasts/Podcast';
import Pagination, { PaginationType } from 'components/ui/Pagination';
import { getData } from 'contexts/DataContext';
import { useMemo, useState } from 'react';
import styled from 'styled-components/macro';
import PageTitle from './PageTitle';

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
  ${Main};
  padding-top: 0px;
  flex-direction: column;
`;

const PaginationParent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

function Home() {
  const PageSize = 15;

  const [currentPage, setCurrentPage] = useState(1);
  const { podcasts } = getData();

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return podcasts.slice(firstPageIndex, lastPageIndex);
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
              totalCount={podcasts.length}
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
