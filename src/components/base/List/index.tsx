interface Props {
  children: any;
}
export const List = ({ children }: Props) => {
  return (
    <ul className="h-auto w-full divide-y divide-slate-100 sm:px-4 md:px-5 lg:w-2/3 ">
      {children}
    </ul>
  );
};
