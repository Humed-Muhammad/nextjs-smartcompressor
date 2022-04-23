interface Props {
  children: any;
}
export const List = ({ children }: Props) => {
  return (
    <ul className="divide-y divide-slate-100 w-full xl:w-2/3 ">{children}</ul>
  );
};
