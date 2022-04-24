/* eslint-disable react/display-name */
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import { getLocalStorage } from '@/utils/helpers';

export const auth = (Page: () => ReactElement<any, any>) => {
  return (props: any) => {
    const Router = useRouter();
    if (typeof window !== 'undefined') {
      const accessToken = getLocalStorage('token');
      if (!accessToken) {
        Router.replace('/login');
        return null;
      }

      return <Page {...props} />;
    }
    return null;
  };
};
