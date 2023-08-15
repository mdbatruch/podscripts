import styled from 'styled-components/macro';
import Button from 'components/ui/Button';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import { BLUE, GREY_ACCENT } from 'styles/color';
import { SPACE_20 } from 'styles/spacing';

const SubTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${SPACE_20};
`;

const SubTitleMain = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  color: ${GREY_ACCENT};
`;

const SubTitle = () => {
  return (
    <SubTitleContainer>
      <SubTitleMain>Featured Podcasts</SubTitleMain>
      <Link to="/podcasts" style={{ textDecoration: 'none' }}>
        <Button
          label={'View All Podcasts'}
          backgroundColor={BLUE}
          rounded={true}
        />
      </Link>
    </SubTitleContainer>
  );
};

export default memo(SubTitle);
