import { Tab, Tabs } from "@mui/material";
import Main from "components/core/sections/page/MainContent";
import { getData } from "contexts/DataContext";
import { ReactNode, SyntheticEvent, useCallback, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { DARK_BLUE, WHITE } from "styles/color";
import { SPACE_40 } from "styles/spacing";
import BreadCrumbs, { BreadcrumbsTopWrapper, formatPagePath } from "utils/BreadcrumbUtil";

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
  
  return (
    <>
      <BreadcrumbsTopWrapper>
        <BreadCrumbs />
      </BreadcrumbsTopWrapper>
      <PodcastSingleWrapper>
        <PodcastSingleHeader>
          <Title>{newItem}</Title>
          <PodcastSingleDate>Episode Date: {matchingPodcast[0].release_date}</PodcastSingleDate>
        </PodcastSingleHeader>
        <Tabs
          value={value}
          onChange={handleChange}
        >
          <Tab label="Transcript" />
          <Tab label="Discussion" />
        </Tabs>
        <TabContent value={value} index={0}>
          
        </TabContent>
        <TabContent value={value} index={1}>
         
        </TabContent>
      </PodcastSingleWrapper>
    </>
  );
}
export default PodCastSingle;
