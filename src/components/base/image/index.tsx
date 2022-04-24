interface Props {
  src: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  alt?: string;
}

export const Image = ({ src, width, height, className, alt }: Props) => {
  return (
    <img
      width={width}
      height={height}
      src={src}
      alt={alt}
      className={`${className} object-cover`}
    />
  );
};
