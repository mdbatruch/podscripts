import { Tab, Tabs } from "@mui/material";
import Main from "components/core/sections/page/MainContent";
import ChatBoxIcon from "components/ui/icons/ChatBoxIcon";
import DocumentIcon from "components/ui/icons/DocumentIcon";
import { getData } from "contexts/DataContext";
import { ReactNode, SyntheticEvent, useCallback, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components/macro";
import { BLUE, DARK_BLUE, GREY_ACCENT, LIGHT_GREY, WHITE } from "styles/color";
import { SPACE_10, SPACE_20, SPACE_40 } from "styles/spacing";
import { FONT_SIZE_14, FONT_SIZE_16 } from "styles/typography";
import BreadCrumbs, { BreadcrumbsTopWrapper, formatPagePath } from "utils/BreadcrumbUtil";
import { formatDate } from "utils/DateUtil";
import { formatPodcastTime } from "utils/TimeUtil";

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

const TabParentContainer = styled.div`
  padding: ${SPACE_10};
`;

const TranscriptContainer = styled.div`
  display: inline-block;
`;

const TranscriptTimeContainer = styled.div`
  color: ${GREY_ACCENT};
  display: block;
  font-weight: 600;
  font-size: ${FONT_SIZE_14};
  padding: 0 0 5px;
  margin-top: ${SPACE_20};
`;

const TranscriptTextContainer = styled.div`
  font-size: ${FONT_SIZE_16};
`;

interface TabContentProps {
  value: number;
  index: number;
  children: ReactNode | string;
}

interface TranscriptProps {
  currTime: number;
  text: string;
}

const TabContent = ({ value, index, children }: TabContentProps) => {
  return (
    <TabParentContainer>
      {value == index && <>{children}</>}
    </TabParentContainer>
  );
};

const PodCastSingle = () => {

  const { podcast } = useParams();
  const { episodes } = getData();

  const newItem = useMemo(() => formatPagePath(podcast), [podcast]);

  console.log('newitem', newItem);
  
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

  const formattedTranscript = useMemo(() => {
    if (!matchingPodcast[0].transcript) return [];

    const transcriptParse = JSON.parse(matchingPodcast[0].transcript);
    const transcript = transcriptParse as TranscriptProps[];

    const chunkSize = 5;

    const chunkedTranscript = Array.from(
      { length: Math.ceil(transcript.length / chunkSize) },
      (_, index) => transcript.slice(index * chunkSize, (index + 1) * chunkSize)
    );

    return (
      <>
          {chunkedTranscript.map((section: TranscriptProps[], index: number) => {
            const isNewSection = index % 1 === 0;
            const time = formatPodcastTime(section[0].currTime);

            return (
              <>
                { isNewSection && (
                    <TranscriptTimeContainer>Starting point is {time}</TranscriptTimeContainer>
                  )}
                <TranscriptContainer key={index}>
                  <TranscriptTextContainer>{section.map((item: TranscriptProps) => item.text).join(' ')}</TranscriptTextContainer>
                </TranscriptContainer>
              </>
            )
          })}
      </>
    )
  }, [matchingPodcast[0].transcript]);

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
          <div>{matchingPodcast[0].description}</div>
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
          {formattedTranscript}
        </TabContent>
        <TabContent value={value} index={1}>
         
        </TabContent>
      </PodcastSingleWrapper>
    </>
  );
}
export default PodCastSingle;
