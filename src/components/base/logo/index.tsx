import Link from 'next/link';

export const Logo = () => {
  return (
    <Link passHref href="/">
      <h1 className=" float-right text-2xl font-bold text-yellow-500 ">
        Smart
        <span className="m-0 p-0 text-3xl font-extrabold text-gray-700 ">
          Compressor
        </span>
      </h1>
    </Link>
  );
};
