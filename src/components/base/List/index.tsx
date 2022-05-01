interface Props {
  children: any;
}
export const List = ({ children }: Props) => {
  return (
    <ul className="w-full divide-y divide-slate-100 xl:w-2/3 ">{children}</ul>
  );
};
