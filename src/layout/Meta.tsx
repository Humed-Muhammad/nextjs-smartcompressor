import { ReactElement } from 'react';

import { Navigationbar } from '@/components/navbar/navbar';
import { useAuth } from '@/utils/hooks/reactHooks';

interface Props {
  children: ReactElement<any>;
}
export const Layout = ({ children }: Props) => {
  const auth = useAuth();
  return (
    <>
      <Navigationbar />
      {children}
    </>
  );
};
