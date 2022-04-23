export const getLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};

export const setLocalStorage = (key: string, data: any) => {
  return localStorage.setItem(key, data);
};
