import { Tab, Tabs } from "@mui/material";
import Main from "components/core/sections/page/MainContent";
import ChatBoxIcon from "components/ui/icons/ChatBoxIcon";
import DocumentIcon from "components/ui/icons/DocumentIcon";
import { getData } from "contexts/DataContext";
import { ReactNode, SyntheticEvent, useCallback, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { BLUE, DARK_BLUE, LIGHT_GREY, WHITE } from "styles/color";
import { SPACE_10, SPACE_40 } from "styles/spacing";
import BreadCrumbs, { BreadcrumbsTopWrapper, formatPagePath } from "utils/BreadcrumbUtil";
import { formatDate } from "utils/DateUtil";

const PodcastSingleWrapper = styled.div`
    ${Main};
    background-color: ${WHITE};
    flex-direction: column;
    margin-bottom: ${SPACE_40};
`;

const PodcastSingleHeader = styled.div`
    background-color: ${WHITE};
    flex-direction: column;
    padding: 0 ${SPACE_40} ${SPACE_40};
`;

const Title = styled.h1`
  color: ${DARK_BLUE};
  font-family: Montserrat, sans-serif;
  font-size: 18px;
  font-weight: 700;
  padding: 25px 0 10px;
  text-align: left;
  width: 100%;
}
`;

const PodcastSingleDate = styled.div`
  font-weight: 500;
  padding: 0 0 5px;
`;

const TabTitleContainer = styled(Tab)`
  &.MuiTab-root {
    flex-direction: row;
    flex: 1;
    max-width: none;
    color: ${LIGHT_GREY};
    &.Mui-selected {
      color: ${BLUE};
    }
    svg {
      margin-right: ${SPACE_10};
    }
  }
`;

const TabParent = styled(Tabs)`
  .MuiTabs-indicator {
    background-color: ${BLUE};
  }
`;

interface TabContentProps {
  value: number;
  index: number;
  children: ReactNode | string;
}

const TabContent = ({ value, index, children }: TabContentProps) => {
  return (
    <>
      {value == index && <>{children}</>}
    </>
  );
};

const PodCastSingle = () => {

  const { podcast } = useParams();
  const { episodes } = getData();

  const newItem = useMemo(() => formatPagePath(podcast), [podcast]);
  
  const matchingPodcast = useMemo(() => { return episodes.filter(item => item.title?.toLowerCase().includes(newItem.trim().toLowerCase())) }, [episodes, newItem]);

  /**
   * Set first tab active on default
   */
  const [value, setValue] = useState<number>(0);

  const handleChange = useCallback((e: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  }, [setValue]);

  const formattedDate = useMemo(() => {
    const releaseDate = matchingPodcast[0]?.release_date;
    return releaseDate ? formatDate(releaseDate) : '';
  }
  , [matchingPodcast]);

  // const color = useMemo(() => value === 0 ? BLUE : LIGHT_GREY, [value]);
  /**
   * TODO - clean up layout, move fill attribute logic to memoized value (example above)
   * 
   */
  return (
    <>
      <BreadcrumbsTopWrapper>
        <BreadCrumbs />
      </BreadcrumbsTopWrapper>
      <PodcastSingleWrapper>
        <PodcastSingleHeader>
          <Title>{newItem}</Title>
          <PodcastSingleDate>Episode Date: {formattedDate}</PodcastSingleDate>
        </PodcastSingleHeader>
      </PodcastSingleWrapper>
      <PodcastSingleWrapper>
        <TabParent
          value={value}
          onChange={handleChange}
        >
          <TabTitleContainer label={<><DocumentIcon height={15} width={15} fill={value === 0 ? BLUE : LIGHT_GREY} /> Transcript</>} />
          <TabTitleContainer label={<><ChatBoxIcon height={15} width={15} fill={value === 1 ? BLUE : LIGHT_GREY} /> Discussion</>} />
        </TabParent>
        <TabContent value={value} index={0}>
          {matchingPodcast[0].transcript}
          {}
        </TabContent>
        <TabContent value={value} index={1}>
         
        </TabContent>
      </PodcastSingleWrapper>
    </>
  );
}
export default PodCastSingle;
