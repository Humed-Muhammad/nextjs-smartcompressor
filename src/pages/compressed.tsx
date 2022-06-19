import { Text } from '@mantine/core';
import React from 'react';
import { useQuery } from 'react-query';

import { ApiRequest } from '@/api';
import { CompressedImageCard } from '@/components/CompressedImageCard';
import { SavedImageTypes } from '@/utils/types';

const Compressed = () => {
  const requestImages = async () => {
    const result = await ApiRequest({
      method: 'GET',
      url: '/api/images',
    });
    return result;
  };
  const { data } = useQuery('images', requestImages);

  return (
    <div className="mt-3 flex min-h-screen flex-1 flex-wrap items-center justify-center">
      {data && data.length ? (
        data.map((image: SavedImageTypes, index: number) => (
          <CompressedImageCard image={image} key={index} />
        ))
      ) : (
        <Text>You have not saved images yet!</Text>
      )}
    </div>
  );
};

export default Compressed;
