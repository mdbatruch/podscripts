import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { BLUE, WHITE } from 'styles/color';
import { SPACE_20 } from 'styles/spacing';
import Button from './ui/Button';
import PlusIcon from './ui/icons/PlusIcon';

const SubmitContainer = styled.div`
  display: none;
  margin: 0 ${SPACE_20};
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const SubmitLink = () => {
  return (
    <Link to="/submit" style={{ textDecoration: 'none' }}>
      <Button
        label={'Submit Podcast'}
        backgroundColor={BLUE}
        rounded={true}
        icon={<PlusIcon height={15} width={15} fill={WHITE} />}
      />
    </Link>
  );
};

const Submit = () => {
  return (
    <SubmitContainer>
      <SubmitLink />
    </SubmitContainer>
  );
};

export default Submit;
