import { CheckIcon } from '@heroicons/react/outline';
import { showNotification, updateNotification } from '@mantine/notifications';
import { Button } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useMutation, useQueryClient } from 'react-query';

import { ApiRequest } from '@/api';
import logo from '@/public/favicon.ico';
import { useAppSelector } from '@/utils/hooks/reduxHooks';

import { selectCompressedImages } from '../FileDrop/slice/selectors';

export function Navigationbar() {
  const compressedImages = useAppSelector(selectCompressedImages);

  const queryClient = useQueryClient();
  const mutation = useMutation(ApiRequest, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries('images');
      updateNotification({
        id: 'uploading-images',
        message: 'Your images are successfully saved!',
        color: 'green',
        icon: <CheckIcon className="w-6" />,
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
    <nav className="rounded bg-white px-2 py-2.5 shadow-md sm:px-4">
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
              Smart Compressor
            </h1>
          </div>
        </Link>
        <div className="flex items-center md:order-2">
          <Button
            onClick={() => {
              showNotification({
                id: 'uploading-images',
                message: 'Your images are successfully saved!',
                color: 'blue',
                loading: true,
              });
              mutation.mutate({
                method: 'POST',
                body: compressedImages,
                url: 'api/images',
              });
            }}
            type="dashed"
          >
            Save locally
          </Button>
          <Button
            // className="block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
            type="default"
            className="mx-2 rounded-md bg-yellow-500 text-white hover:text-gray-500"
          >
            <Link passHref href="/compressed">
              Compressed
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
