export const getFileExtensition = (fileName: string) => {
  const extensition = fileName.slice(fileName.indexOf('.') + 1);
  return extensition;
};
