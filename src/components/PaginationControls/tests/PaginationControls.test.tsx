import { fireEvent, render } from '@testing-library/react';

import PaginationControls from '../PaginationControls';

describe('PaginationControls', () => {
  it('should render correctly', () => {
    const setCurrentPage = jest.fn();
    const { getByLabelText } = render(
      <PaginationControls currentPage={1} setCurrentPage={setCurrentPage} pageCount={10} />,
    );

    expect(getByLabelText('previous page')).toBeDisabled();
    expect(getByLabelText('next page')).not.toBeDisabled();
    expect(getByLabelText('jump to page 1')).toHaveClass('bg-slate-300');
    expect(getByLabelText('jump to page 2')).not.toHaveClass('bg-slate-300');
  });

  it('should handle page changes correctly', () => {
    const setCurrentPage = jest.fn();
    const { getByLabelText } = render(
      <PaginationControls currentPage={1} setCurrentPage={setCurrentPage} pageCount={10} />,
    );

    fireEvent.click(getByLabelText('next page'));
    expect(setCurrentPage).toHaveBeenCalledWith(2);

    fireEvent.click(getByLabelText('jump to page 5'));
    expect(setCurrentPage).toHaveBeenCalledWith(5);
  });
});
