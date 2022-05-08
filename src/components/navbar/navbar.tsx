import { Button } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

import logo from '@/public/favicon.ico';

export function Navigationbar() {
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
          <Button type="dashed">Save locally</Button>
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
