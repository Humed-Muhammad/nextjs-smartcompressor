/* eslint-disable consistent-return */
export const getLocalStorage = (key: string) => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(key);
  }
  return false;
};

export const setLocalStorage = (key: string, data: any) => {
  if (typeof window !== 'undefined') {
    return localStorage.setItem(key, data);
  }
  return false;
};
