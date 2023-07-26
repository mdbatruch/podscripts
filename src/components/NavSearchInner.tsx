import { Button } from 'stories/Button';
import styled from 'styled-components';
import { LIGHT_GREY, WHITE } from 'styles/color';
import { SPACE_20 } from 'styles/spacing';
import { StepFieldType } from 'enums/stepFieldTypes';
import StepFields from './core/fields/StepFields';
import { useEffect, useState } from 'react';

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

  const handleChange = (e: any) => {
    console.log(e.target.value);

    setChecked(e.target.value);

    console.log('checked', checked);
  };

  useEffect(() => {
    console.log('checked effect');
  }, [checked]);

  return (
    <InnerForm className="header-search vis-header-search">
      <form className="header-search-form">
        <div className="header-search-left search-cell pod-search">
          <div className="input-field ">
            {/* <input
              type="text"
              name="search-city-input"
              placeholder="Type your query"
              className="form-control search-input"
            /> */}
            <StepFields
              type={StepFieldType.TEXT}
              label={'label'}
              placeholder={'Type your query'}
            />
            <span className="search-clear-button">
              <i aria-hidden="true" className="fa fa-times-circle"></i>
            </span>
          </div>
        </div>
        <div className="search-type-selector search-cell">
          {/* <input
            type="radio"
            id="rdo1"
            // checked="checked"
            name="radio-group"
            className="radio-input"
          /> */}
          <StepFields
            type={StepFieldType.RADIO}
            value={'basic'}
            label={'Basic Search'}
            onChange={handleChange}
            checked={checked === 'basic'}
          />
          {/* <label className="radio-label">
            <span className="radio-border"></span>
            Basic Search
          </label> */}
          {/* <input
            type="radio"
            id="rdo2"
            name="radio-group"
            className="radio-input"
          /> */}
          <StepFields
            type={StepFieldType.RADIO}
            value={'advanced'}
            label={'Advanced Search'}
            onChange={handleChange}
            checked={checked === 'advanced'}
          />
        </div>
        <div className="header-search-mid search-cell">
          {/* <input
            type="text"
            placeholder="Select Podcast First"
            // disabled="disabled"
            className="search-input"
          /> */}
          <StepFields
            type={StepFieldType.TEXT}
            label={'label'}
            placeholder={'Select Podcast First'}
          />
        </div>
        <InnerFormSearchContainer>
          <Button label={'Search'} backgroundColor={LIGHT_GREY} />
        </InnerFormSearchContainer>
      </form>
    </InnerForm>
  );
};

export default NavSearchInner;
