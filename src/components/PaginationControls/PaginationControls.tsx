import { PaginationControlsProps } from './types';

function PaginationControls({ currentPage, setCurrentPage, pageCount }: PaginationControlsProps) {
  return (
    <ul className='flex p-2'>
      <button
        className='p-1'
        aria-label='previous page'
        disabled={currentPage <= 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        {'<'}
      </button>
      {[...Array(pageCount)].map((_, i) => {
        const isSelected = i + 1 === currentPage;
        const styles = isSelected ? 'p-1 bg-slate-300 ' : 'p-1 hover:bg-slate-500';

        return (
          <li key={i}>
            <button className={styles} aria-label={`jump to page ${i + 1}`} onClick={() => setCurrentPage(i + 1)}>
              {i + 1}
            </button>
          </li>
        );
      })}
      <button
        className='p-1'
        aria-label='next page'
        disabled={currentPage >= pageCount}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        {'>'}
      </button>
    </ul>
  );
}

export default PaginationControls;
