import { Button } from 'stories/Button';
import styled from 'styled-components';
import { BLUE, BORDER_GREY, LIGHT_GREY, WHITE } from 'styles/color';
import { SPACE_10, SPACE_20 } from 'styles/spacing';
import { StepFieldType } from 'enums/stepFieldTypes';
import { useEffect, useState } from 'react';
import InputText from './ui/forms/InputText';
import InputRadio from './ui/forms/InputRadio';
import AdvancedSearch from './core/sections/search/AdvancedSearch';
import BasicSearch from './core/sections/search/BasicSearch';
import PODCASTS from 'mocks/PODCASTS.json';

interface PodcastItemProps {
  id: number;
  podcast_title: string;
}

const InnerForm = styled.div`
  padding: ${SPACE_20};
  background-color: ${WHITE};
  box-shadow: none;
  left: 0;
  margin: 0 auto;
  width: 80%;
  right: 0;
  top: 0px;
`;

const InnerFormHeader = styled.div`
  height: 100%;
  margin: 0 auto;
  position: relative;
`;

const InnerFormSearchContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: ${SPACE_20} 0 0 0;
`;

const PodcastSearchResults = styled.div`
  left: ${SPACE_10};
  position: absolute;
  top: 36px;
  width: 100%;
  z-index: 5;
  background-color: ${WHITE};
  display: none;
  &.active {
    display: block;
  }
`;

const PodcastItems = styled.div`
  background-color: ${WHITE};
  border-bottom: 1px solid ${BORDER_GREY};
  color: ${BLUE};
  display: block;
  line-height: 1.5rem;
  margin: 0;
  padding: ${SPACE_10} ${SPACE_20};
  transition: 0.25s;
`;

const NavSearchInner = () => {
  const [checked, setChecked] = useState<string>('');
  const [podcastSearch, setPodcastSearch] = useState<boolean>(false);
  const [podcastItems, setPodcastItems] = useState<PodcastItemProps[]>([]);
  const [activeResults, setActiveResults] = useState<boolean>(false);

  const handleChange = (e: any) => {
    setChecked(e.target.value);
    setPodcastSearch(false);
  };

  const togglePodcastSearch = (e: void) => {
    setPodcastSearch(!podcastSearch);
  };

  const searchPodcasts = (e: any) => {
    if (e.target.value === '') {
      setActiveResults(false);
      return;
    }

    setActiveResults(true);

    const filteredList = PODCASTS.filter((item) => {
      return (
        item.podcast_title
          .toLowerCase()
          .indexOf(e.target.value.toLowerCase()) !== -1
      );
    });

    setPodcastItems(filteredList);
  };

  useEffect(() => {}, [checked, podcastSearch]);

  return (
    <InnerForm className="header-search vis-header-search">
      <InnerFormHeader>
        <div className="header-search-left search-cell pod-search">
          <div className="input-field">
            <InputText
              label={'label'}
              placeholder={'Type your query'}
              onChange={searchPodcasts}
            />
            <span className="search-clear-button">
              <i aria-hidden="true" className="fa fa-times-circle"></i>
            </span>
          </div>
          <PodcastSearchResults className={!!activeResults ? 'active' : ''}>
            {podcastItems &&
              podcastItems.map((item: PodcastItemProps, idx: number) => {
                return (
                  <PodcastItems key={item.id}>
                    {item.podcast_title}
                  </PodcastItems>
                );
              })}
          </PodcastSearchResults>
        </div>
        <div className="search-type-selector search-cell">
          <InputRadio
            value={'basic'}
            label={'Basic Search'}
            onChange={handleChange}
            checked={checked === 'basic'}
          />
          <InputRadio
            value={'advanced'}
            label={'Advanced Search'}
            onChange={togglePodcastSearch}
            checked={checked === 'advanced'}
          />
        </div>
        <div className="header-search-mid search-cell">
          {!!podcastSearch ? <AdvancedSearch /> : <BasicSearch />}
        </div>
        <InnerFormSearchContainer>
          <Button label={'Search'} backgroundColor={LIGHT_GREY} />
        </InnerFormSearchContainer>
      </InnerFormHeader>
    </InnerForm>
  );
};

export default NavSearchInner;
