import { CheckOutlined } from '@ant-design/icons';
import { Text } from '@mantine/core';

const about = () => {
  return (
    <div className=" flex w-full grow items-center justify-center ">
      <div>
        <h1 className="font-mono text-3xl font-semibold text-gray-600">
          About
        </h1>
        <Text className="my-2 w-11/12 md:w-1/2 ">
          This online smart image optimizer and image compressor uses a smart
          combination of the best optimization and lossy compression algorithms
          to shrink JPEG, JPG and PNG images to the minimum possible size while
          keeping the required level of quality.
        </Text>
        <Text className="my-2 my-2 w-11/12 md:w-1/2 ">
          Upload as many images a you want!, You don`&apos;t have to worry for
          performance our smart image compressoion algorithm uses parallel
          excution by default and handle it for you
        </Text>
        <Text className="my-2 my-2 w-11/12 md:w-1/2 ">
          Use the slider to control the compression level and hover with your
          mouse on the circled image to check and compare your quality.
        </Text>
        <h2 className="my-2 text-3xl font-bold text-orange-500 ">
          What make as different?
        </h2>
        <ul className="flex list-none flex-col justify-center">
          <li className="flex items-center">
            <CheckOutlined size={35} className="mx-2 text-green-500" />
            Unlimited compression. As much as you can!
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
};

export default about;
