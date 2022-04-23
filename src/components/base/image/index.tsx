interface Props {
  src: string;
  width?: string | number;
  height?: string | number;
  className?: string;
}

export const Image = ({ src, width, height, className }: Props) => {
  return (
    <img
      width={width}
      height={height}
      src={src}
      alt="file"
      className={`${className} object-cover`}
    />
  );
};
