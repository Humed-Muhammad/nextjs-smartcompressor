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
          }, 1000);
        }}
        {...props}
        className="bg-white px-5"
        height={200}
      >
        <p className="ant-upload-drag-icon">
          <DocumentAddIcon />
        </p>
        <p className="ant-upload-text font-sans">
          Click or drag file to this area to compress
        </p>
      </Dragger>
    </div>
  );
};

export default FileDropzone;
