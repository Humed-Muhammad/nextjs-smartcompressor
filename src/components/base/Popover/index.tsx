import { Popover, Image } from 'antd';

interface Props {
  image: Blob;
  children: any;
}

export const ImagePreview = ({ image, children }: Props) => {
  const content = (
    <div>
      <Image
        preview={false}
        className="w-72"
        src={image && window.URL.createObjectURL(image)}
      />
    </div>
  );
  return (
    <Popover placement="right" content={content} title="Compressed image">
      {children}
    </Popover>
  );
};
