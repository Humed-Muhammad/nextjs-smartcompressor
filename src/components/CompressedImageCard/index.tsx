import { LightBulbIcon } from '@heroicons/react/outline';
import React from 'react';

import { CompressedResultTypes } from '@/utils/types';

import { Button } from '../base';
import { DeleteIcon } from '../base/Icons';

interface Props {
  image?: CompressedResultTypes;
}
export const CompressedImageCard = ({ image }: Props) => {
  return (
    <div className="relative flex h-auto  w-80 flex-col items-center justify-between rounded-md bg-white p-3 shadow-md">
      <DeleteIcon className="absolute cursor-pointer self-end" />
      <img
        className="mb-2 h-64 w-full rounded-md object-cover"
        src={
          image?.compressedImage
            ? window.URL.createObjectURL(image?.compressedImage)
            : ''
        }
        alt="compreesed image"
      />
      <h1 className="text-center font-mono text-2xl">{image?.imageName}</h1>
      <div className="flex w-full items-center justify-center">
        <h2 className="flex items-center justify-center">
          Compressed Size
          <LightBulbIcon className="w-6 text-yellow-500" />
        </h2>
        <p className=" text-center text-indigo-500">
          {image?.compressedSize} kb
        </p>
      </div>
      <div className="flex w-full justify-end">
        <Button
          text="Download"
          className="w-full bg-blue-400"
          variant="primary"
        />
      </div>
    </div>
  );
};
