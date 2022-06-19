import { ReactElement } from 'react';

import { Navigationbar } from '@/components/navbar/navbar';

interface Props {
  children: ReactElement<any>;
}
export const Layout = ({ children }: Props) => {
  return (
    <div className=" flex h-screen w-full flex-col items-stretch  justify-around">
      <Navigationbar />
      {children}
    </div>
  );
};
