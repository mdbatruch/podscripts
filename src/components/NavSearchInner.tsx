import { Button } from 'stories/Button';
import styled from 'styled-components';
import { LIGHT_GREY, WHITE } from 'styles/color';
import { SPACE_20 } from 'styles/spacing';
import { StepFieldType } from 'enums/stepFieldTypes';
import { useEffect, useState } from 'react';
import InputText from './ui/forms/InputText';
import InputRadio from './ui/forms/InputRadio';
import AdvancedSearch from './core/sections/search/AdvancedSearch';
import BasicSearch from './core/sections/search/BasicSearch';

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

const InnerFormSearchContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: ${SPACE_20} 0 0 0;
`;

const NavSearchInner = () => {
  const [checked, setChecked] = useState<string>('');
  const [podcastSearch, setPodcastSearch] = useState<boolean>(false);

  const handleChange = (e: any) => {
    setChecked(e.target.value);
    setPodcastSearch(false);
  };

  const togglePodcastSearch = (e: void) => {
    setPodcastSearch(!podcastSearch);
  };

  useEffect(() => {}, [checked, podcastSearch]);

  return (
    <InnerForm className="header-search vis-header-search">
      <form className="header-search-form">
        <div className="header-search-left search-cell pod-search">
          <div className="input-field ">
            <InputText label={'label'} placeholder={'Type your query'} />
            <span className="search-clear-button">
              <i aria-hidden="true" className="fa fa-times-circle"></i>
            </span>
          </div>
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
      </form>
    </InnerForm>
  );
};

export default NavSearchInner;
