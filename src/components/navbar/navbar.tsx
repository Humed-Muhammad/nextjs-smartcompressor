import { showNotification } from '@mantine/notifications';
import { Button } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { ApiRequest } from '@/api';
import logo from '@/public/favicon.ico';
import { zipper } from '@/utils/functions/zipper';
import { useAppSelector } from '@/utils/hooks/reduxHooks';

import { selectCompressedImages } from '../FileDrop/slice/selectors';

export function Navigationbar() {
  const [allImages, setAllImages] = useState<Buffer>();
  const compressedImages = useAppSelector(selectCompressedImages);
  const getZippedFile = useCallback(() => {
    if (compressedImages && compressedImages.length >= 2) {
      zipper(compressedImages).then((data) => {
        setAllImages(data);
      });
    }
  }, [compressedImages]);

  useEffect(() => {
    getZippedFile();
  }, [getZippedFile]);

  const queryClient = useQueryClient();
  const mutation = useMutation(ApiRequest, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries('images');
      showNotification({
        message: 'Your images are successfully saved!',
        color: 'green',
      });
    },
    onError: ({ message }) => {
      showNotification({
        message,
        color: 'red',
      });
    },
  });

  return (
    <nav className="rounded bg-white px-2 py-2.5 shadow-lg sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link passHref href="/">
          <div className="flex cursor-pointer items-center ">
            <Image
              width={32}
              height={32}
              src={logo}
              alt="Flowbite Logo"
              className="h-8 w-8"
            />
            <h1 className="ml-2 self-center whitespace-nowrap text-base font-normal dark:text-white md:text-xl md:font-semibold ">
              Image Compressor
            </h1>
          </div>
        </Link>
        <div className="flex items-center md:order-2">
          <Button
            onClick={() =>
              mutation.mutate({
                method: 'POST',
                body: { compressedImages: allImages },
                url: 'api/images',
              })
            }
            type="dashed"
          >
            Save locally
          </Button>
        </div>

        <p
          className="block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
          aria-current="page"
        >
          <Link href="/compressed">Compressed</Link>
        </p>
      </div>
    </nav>
  );
}
