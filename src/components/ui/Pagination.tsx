import styled from 'styled-components/macro';
import { memo, useCallback } from 'react';
import { PaginationUtil, DOTS, PaginationProps } from 'utils/PaginationUtil';
import { BLACK, BLUE, WHITE } from 'styles/color';
import ChevronRightIcon from './icons/ChevronRightIcon';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import { SPACE_20 } from 'styles/spacing';

export enum PaginationType {
  PAGINATION_PARENT = 'pagination-parent',
}

const PaginationContainer = styled.div`
  display: flex;
  margin-top: ${SPACE_20};
`;

const PaginationList = styled.li<{ isDisabled?: boolean }>`
  align-items: center;
  display: flex;
  list-style: none;
  ${({ isDisabled }) =>
    isDisabled &&
    `opacity: 0.5;
       cursor: default;
       pointer-events: none;
    `};
  &.active-item {
    background-color: ${BLUE};
  }
`;

const PaginationListInnerDots = styled.div`
  padding: 0 6px;
  margin: 0 3px;
`;

const PaginationListInner = styled.button<{ $disabled?: boolean }>`
  align-items: center;
  display: flex;
  justify-content: center;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  border-radius: 4px;
  text-align: center;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.23);
  min-width: 32px;
  height: 32px;
  padding: 0 6px;
  margin: 0 3px;
  color: rgba(0, 0, 0, 0.87);
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.12);
  }
  &.active-item {
    background-color: ${BLUE};
    color: ${WHITE};
  }
`;

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}: PaginationProps) => {
  const paginationRange = PaginationUtil({
    onPageChange,
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (!paginationRange) return null;

  if (currentPage === 0 || paginationRange?.length < 2) {
    return null;
  }

  const onNext = useCallback(() => {
    const lastElement = paginationRange?.pop();

    if (!lastElement) return null;

    if (Number(currentPage) < Number(lastElement)) {
      onPageChange(currentPage + 1);
    }
  }, [currentPage, onPageChange]);

  const onPrevious = useCallback(() => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  }, [currentPage, onPageChange]);

  return (
    <PaginationContainer>
      <PaginationList onClick={onPrevious}>
        <PaginationListInner>
          <ChevronLeftIcon height={15} width={15} fill={BLACK} />
        </PaginationListInner>
      </PaginationList>
      {paginationRange?.map((pageNumber, idx) => {

        /**
         * TODO - remove `idx` as key value, as it's an anti-pattern - very bad!
         * Need to add new value to `pageNumber` to prevent duplicate keys.
         */
        return (
          <div key={idx}>
            {pageNumber === DOTS ? (
              <PaginationList>
                <PaginationListInnerDots>&#8230;</PaginationListInnerDots>
              </PaginationList>
            ) : (
              <PaginationList onClick={() => onPageChange(Number(pageNumber))}>
                <PaginationListInner
                  className={
                    currentPage === pageNumber ? 'active-item' : undefined
                  }
                >
                  {pageNumber}
                </PaginationListInner>
              </PaginationList>
            )}
          </div>
        );
      })}
      <PaginationList onClick={() => onNext()}>
        <PaginationListInner $disabled={true}>
          <ChevronRightIcon height={15} width={15} fill={BLACK} />
        </PaginationListInner>
      </PaginationList>
    </PaginationContainer>
  );
};

export default memo(Pagination);
