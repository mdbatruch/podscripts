import styled from 'styled-components';
interface TitleProps {
  title?: string;
}

const PageTitleWrapper = styled.h2`
  font-weight: 700;
  display: flex;
  justify-content: center;
  font-size: 2rem;
`;

const PageTitle = ({ title }: TitleProps) => {
  return (
    <PageTitleWrapper>
      {title}
    </PageTitleWrapper>
  );
}

export default PageTitle;
