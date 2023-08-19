import { useMemo } from 'react';

export interface PaginationProps {
  onPageChange: (item: number) => void;
  totalCount: number;
  pageSize: number;
  siblingCount?: 1;
  currentPage: number;
  className?: string;
}

export const DOTS = '...';

const range = (start: number, end: number) => {
  const length = end - start + 1;

  return Array.from({ length }, (item, idx) => idx + start);
};

export const PaginationUtil = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
}: PaginationProps): (string | number)[] | undefined => {
  const paginationRange = useMemo(() => {
    /**
     * Get amount of items on Page
     */
    const totalPageCount = Math.ceil(totalCount / pageSize);
    const totalPageNumbers = siblingCount + 5;

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 5 * siblingCount;
      const leftRange = range(1, leftItemCount);
      return [...leftRange, DOTS, totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 5 * siblingCount;
      const rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );
      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [totalCount, pageSize, siblingCount, currentPage]);

  return paginationRange;
};
