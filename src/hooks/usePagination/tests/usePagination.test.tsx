import { act, renderHook } from '@testing-library/react';

import usePagination from '../usePagination';

describe('usePagination', () => {
  test('should paginate data correctly', () => {
    const data = Array.from({ length: 100 }, (_, i) => i + 1);
    const { result } = renderHook(() => usePagination(data, 10));

    expect(result.current.currentPage).toBe(1);
    expect(result.current.pageCount).toBe(10);
    expect(result.current.getCurrentData()).toEqual(Array.from({ length: 10 }, (_, i) => i + 1));

    act(() => {
      result.current.setCurrentPage(5);
    });

    expect(result.current.currentPage).toBe(5);
    expect(result.current.getCurrentData()).toEqual(Array.from({ length: 10 }, (_, i) => i + 41));
  });

  test('should throw error when trying to set invalid page', () => {
    const data = Array.from({ length: 100 }, (_, i) => i + 1);
    const { result } = renderHook(() => usePagination(data, 10));

    expect(() => {
      act(() => {
        result.current.setCurrentPage(0);
      });
    }).toThrow('[usePagination]: Tried to setCurrentPage to invalid index 0');

    expect(() => {
      act(() => {
        result.current.setCurrentPage(11);
      });
    }).toThrow('[usePagination]: Tried to setCurrentPage to invalid index 11');
  });
});
