/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable tailwindcss/no-custom-classname */
import { DocumentAddIcon } from '@heroicons/react/outline';
import { Upload, UploadProps } from 'antd';

interface Props {
  props: UploadProps;
}

const FileDropzone = ({ props }: Props) => {
  const { Dragger } = Upload;

  return (
    <div className="mt-10 w-full xl:w-2/3">
      <Dragger
        showUploadList={false}
        listType="picture"
        customRequest={({ file, onSuccess }) => {
          setTimeout(() => {
            onSuccess?.('ok');
          }, 0.1);
        }}
        {...props}
        className="bg-white px-5"
        height={200}
      >
        <p className="ant-upload-drag-icon flex items-center justify-center">
          <DocumentAddIcon className="text-inherit" width="35px" />
        </p>
        <p className="ant-upload-text font-sans text-sm sm:text-base md:text-lg">
          Click or drag file to this area to compress
        </p>
      </Dragger>
    </div>
  );
};

export default FileDropzone;
