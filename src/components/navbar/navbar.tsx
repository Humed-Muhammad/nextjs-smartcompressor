import { Button } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

import logo from '@/public/favicon.ico';

export function Navigationbar() {
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

        <Button type="dashed">
          <Link passHref href="/about">
            About
          </Link>
        </Button>
      </div>
    </nav>
  );
}
