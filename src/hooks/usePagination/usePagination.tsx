import { useState } from 'react';

function usePagination<T>(data: T[], itemsPerPage: number) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemCount = data.length;

  const pageCount = Math.ceil(itemCount / itemsPerPage);

  const getCurrentData = () => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    return data.slice(start, end);
  };

  const setCurrentPageFn = (index: number) => {
    if (index < 1 || index > pageCount) {
      throw new Error(`[usePagination]: Tried to setCurrentPage to invalid index ${index}`);
    }

    setCurrentPage(index);
  };

  return {
    currentPage,
    getCurrentData,
    setCurrentPage: setCurrentPageFn,
    pageCount,
  };
}

export default usePagination;
