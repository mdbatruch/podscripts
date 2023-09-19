import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components/macro';
import { BLUE, WHITE } from 'styles/color';
import { SPACE_20, SPACE_40 } from 'styles/spacing';

export const BreadcrumbsTopWrapper = styled.div`
    max-width: 1304px;
    margin: ${SPACE_40} auto ${SPACE_20};
`;

const BreadCrumbWrapper = styled.div`
  background-color: ${BLUE};
  border-radius: 4px;
  color: ${WHITE};
  padding: ${SPACE_20};
  display: flex;
  justify-content: flex-start;
`;

const LinkNoDeco = styled(Link)`
  text-decoration: none;
  color: ${WHITE};
  line-height: 1.5;
  list-style-type: circle;
  margin-right: ${SPACE_20};
  position: relative;
  &:not(:last-child) {
    &::after {
        background-color: ${WHITE};
        height: 4px;
        width: 4px;
        content: "";
        right: -12px;
        top: calc(50% - 1px);
        position: absolute;
        border-radius: 50%;
    }
    }
`;

export const formatPagePath = (item: string | undefined): string => {
    if (!item) return '';

    const itemDecoded = decodeURIComponent(item);

    const format = itemDecoded?.split('_')
    .map(path =>
        path.charAt(0).toUpperCase() + path.slice(1)
        )
    .join(" ");

    return format;
};

const BreadCrumbs = () => {

    const location = useLocation();

    const pagePath = location.pathname.split('/');

    const items = useMemo(() => pagePath.map((item, idx) => {

        const newItem = formatPagePath(item);

        const breadcrumbPath = `${pagePath.slice(0, idx + 1).join('/')}`;
        return (
            item === '' ? (
                <LinkNoDeco key={'Home'} to={'/'}>Home</LinkNoDeco>
            ) : (
                <LinkNoDeco key={item} to={breadcrumbPath}>{newItem}</LinkNoDeco>
            )
        );
    }), [pagePath]);

    return (
        <BreadCrumbWrapper>
            {items}
        </BreadCrumbWrapper>
    );
  };


export default BreadCrumbs;