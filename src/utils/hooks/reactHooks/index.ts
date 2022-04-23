import { useState, useEffect } from 'react';
import { getLocalStorage } from 'utils/helpers';

export const useAuth = () => {
  const token = getLocalStorage('token');
  const [autherized, setAutherized] = useState(false);
  useEffect(() => {
    if (token) {
      setAutherized(true);
    }
    return () => {};
  }, [token]);
  return autherized;
};
