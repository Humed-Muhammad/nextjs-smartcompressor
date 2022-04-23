interface Props {
  children: any;
  className?: string;
}

export const Container = ({ children, className }: Props) => {
  return (
    <div className={` flex justify-center items-center w-full ${className}`}>
      {children}
    </div>
  );
};
