export interface PaginationControlsProps {
  currentPage: number;
  setCurrentPage: (index: number) => void;
  pageCount: number;
}
