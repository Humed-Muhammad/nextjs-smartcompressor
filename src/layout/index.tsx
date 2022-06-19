import { ReactElement } from 'react';

import { Navigationbar } from '@/components/navbar/navbar';

interface Props {
  children: ReactElement<any>;
}
export const Layout = ({ children }: Props) => {
  return (
    <div className=" flex h-auto w-full flex-col items-stretch  justify-around  bg-slate-100">
      <Navigationbar />
      {children}
    </div>
  );
};
