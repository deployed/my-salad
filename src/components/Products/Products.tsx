import { useEffect, useState } from 'react';

import Image from 'src/components/Image';
import PaginationControls from 'src/components/PaginationControls';
import usePagination from 'src/hooks/usePagination';
import { FruitType } from 'src/types';

function Products() {
  const [fruits, setFruits] = useState<FruitType[] | null>(null);
  const { currentPage, getCurrentData, setCurrentPage, pageCount } = usePagination<FruitType>(fruits || [], 5);

  const fetchFruitsData = async () => {
    try {
      const url = 'https://proxyserver-phi.vercel.app/';
      const res = await fetch(url);
      const fruits = await res.json();

      setFruits(fruits);
    } catch (error: unknown) {
      if (typeof error == 'string') {
        throw new Error(error);
      } else {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    fetchFruitsData();
  }, []);

  if (!fruits) return <p>Loading...</p>;

  return (
    <div>
      <div className='flex m-2'>
        {getCurrentData().map((item) => {
          return <Image item={item} key={item.id} />;
        })}
      </div>
      <PaginationControls currentPage={currentPage} setCurrentPage={setCurrentPage} pageCount={pageCount} />
    </div>
  );
}

export default Products;
