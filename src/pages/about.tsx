import { CheckOutlined } from '@ant-design/icons';
import { Text } from '@mantine/core';
import Image from 'next/image';

import sideImage from '@/public/sideImage.svg';

function About() {
  return (
    <div className="my-2 flex h-auto w-screen grow flex-wrap items-center justify-around overflow-auto">
      <Image className="w-1/2" src={sideImage} alt="About" />
      <div className="w-11/12 md:w-1/2">
        <h1 className="my-2 font-mono text-4xl font-bold text-indigo-400">
          About
        </h1>
        <Text className="my-2 font-semibold">
          This online smart image optimizer and image compressor uses a smart
          combination of the best optimization and lossy compression algorithms
          to shrink JPEG, JPG and PNG images to the minimum possible size while
          keeping the required level of quality.
        </Text>
        <Text className="my-2 font-semibold">
          Upload as many images a you want!, You don`&apos;t have to worry for
          performance our smart image compressoion algorithm uses parallel
          excution by default and handle it for you
        </Text>
        <Text className="my-2 font-semibold">
          Use the slider to control the compression level and hover with your
          mouse on the circled image to check and compare your quality.
        </Text>
        <h2 className="my-2 text-3xl font-bold text-orange-500 ">
          What make as different?
        </h2>
        <ul className="flex list-none flex-col justify-center">
          <li className="flex items-center">
            <CheckOutlined size={35} className="mx-2 text-green-500" />
            Unlimited one time compression. As much as you can!
          </li>
          <li className="flex items-center">
            <CheckOutlined size={35} className="mx-2 text-green-500" />
            Your data never leaves your browser, We never upload your image to
            any server!
          </li>
          <li className="flex items-center">
            <CheckOutlined size={35} className="mx-2 text-green-500" />
            Our Image compressor has the fastest compression time. No waiting
            time for any needless uploades!
          </li>
          <li className="flex items-center">
            <CheckOutlined size={35} className="mx-2 text-green-500" />
            Our Image compressor is free for life time.
          </li>
          <li className="flex items-center">
            <CheckOutlined size={35} className="mx-2 text-green-500" />
            Download in zipped format or individualy.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
