import Main from 'components/core/sections/page/MainContent';
import { useParams } from 'react-router-dom';
import styled from 'styled-components/macro';
import { BLUE, WHITE } from 'styles/color';
import { SPACE_20, SPACE_40 } from 'styles/spacing';
import BreadCrumbs, { formatPagePath } from 'utils/BreadcrumbUtil';

const PodcastSingleWrapper = styled.div`
    ${Main};
    flex-direction: column;
`;

const PodcastSingleMain = styled.div`
    background-color: ${WHITE};
    flex-direction: column;
    padding: ${SPACE_40};
    margin-top: ${SPACE_20};
`;

const PodcastSingleTitle = styled.h1`
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

const PodCastSingle = () => {
  const { name } = useParams();

  const newItem = formatPagePath(name);

  return (
    <PodcastSingleWrapper>
      <BreadCrumbs />
      <PodcastSingleMain>
        <PodcastSingleTitle>{newItem}</PodcastSingleTitle>
      </PodcastSingleMain>
    </PodcastSingleWrapper>
  );
}
export default PodCastSingle;
