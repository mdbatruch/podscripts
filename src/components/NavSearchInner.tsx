import { Button } from 'stories/Button';
import styled from 'styled-components';
import { BORDER_GREY, GREY_MAIN, LIGHT_GREY, WHITE } from 'styles/color';
import { SPACE_10, SPACE_20 } from 'styles/spacing';
import { FormEvent, useCallback, useState } from 'react';
import InputText from './ui/forms/InputText';
import InputRadio from './ui/forms/InputRadio';
import AdvancedSearch from './core/sections/search/AdvancedSearch';
import BasicSearch from './core/sections/search/BasicSearch';
import { Link } from 'react-router-dom';
import { getData } from 'contexts/DataContext';
import { getNav } from 'contexts/NavContext';

export interface PodcastItemProps {
  id: number;
  podcast_title: string;
}

const InnerForm = styled.div`
  background-color: ${WHITE};
  box-shadow: none;
  left: 0;
  margin: 0 auto;
  width: 100%;
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

const InnerFormRadioContainer = styled.div`
  display: flex;
`;

const PodcastSearchResults = styled.div`
  left: ${SPACE_10};
  position: absolute;
  top: 56px;
  width: 100%;
  z-index: 5;
  background-color: ${WHITE};
  display: none;
  &.active {
    display: block;
  }
`;

const PodcastItems = styled.div`
  background-color: ${GREY_MAIN};
  border-bottom: 1px solid ${BORDER_GREY};
  color: ${WHITE};
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
  const { podcasts } = getData();
  const { show, setIsShow } = getNav();

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLButtonElement;

    setChecked(target.value);
    setPodcastSearch(false);
  };

  const togglePodcastSearch = () => {
    setPodcastSearch(!podcastSearch);
  };

  const searchPodcasts = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      const target = e.target as HTMLButtonElement;
      if (target.value === '') {
        setActiveResults(false);
        return;
      }

      setActiveResults(true);

      const filteredList = podcasts.filter((item) => {
        return (
          item.podcast_title
            .toLowerCase()
            .indexOf(target.value.toLowerCase()) !== -1
        );
      });

      setPodcastItems(filteredList);
    },
    [setActiveResults, setPodcastItems]
  );

  return (
    <InnerForm className="header-search vis-header-search">
      <InnerFormHeader>
        <div className="header-search-left search-cell pod-search">
          <div className="input-field">
            <InputText
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
                /**
                 * TODO - move to formatUtil
                 */
                const link = item.podcast_title
                  .toLocaleLowerCase()
                  .replaceAll(' ', '_');

                return (
                  <PodcastItems key={item.id}>
                    <Link
                      to={`/podcasts/${link}`}
                      style={{ textDecoration: 'none' }}
                      onClick={() => setIsShow(!show)}
                    >
                      {item.podcast_title}
                    </Link>
                  </PodcastItems>
                );
              })}
          </PodcastSearchResults>
        </div>
        <InnerFormRadioContainer>
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
        </InnerFormRadioContainer>
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
