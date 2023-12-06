import { useEffect, useState } from 'react';

import { createClient } from 'pexels';
import type { ErrorResponse, Photo } from 'pexels';
import { FruitType } from 'src/types';

interface ImageProps {
  item: FruitType;
}

function Image({ item }: ImageProps) {
  const client = createClient(process.env.REACT_APP_PEXEL_API_KEY as string);
  const [photo, setPhoto] = useState<Photo | null>(null);

  const fetchImage = (query: string) => {
    client.photos
      .search({ query, per_page: 1 })
      .then((data) => {
        if (!('error' in data)) {
          setPhoto(data.photos[0]);
        }
      })
      .catch((error: ErrorResponse) => {
        throw new Error(error.error);
      });
  };

  useEffect(() => {
    fetchImage(item.name);
  }, []);

  return (
    <div className='m-1'>
      <img
        className='object-cover w-52 h-36'
        src={photo?.src.medium || 'https://placehold.co/100'}
        alt={photo?.alt || 'photo of fruit'}
      ></img>
    </div>
  );
}

export default Image;
