/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { showNotification } from '@mantine/notifications';
import { BlobReader, Data64URIWriter, ZipWriter } from '@zip.js/zip.js';

import { CompressedResultTypes } from '../types';

export const zipper = async (files: CompressedResultTypes[]) => {
  const zipWriter = new ZipWriter(new Data64URIWriter('application/zip'));

  for (const file of files) {
    try {
      await zipWriter.add(file.imageName, new BlobReader(file.compressedImage));
    } catch ({ message }) {
      showNotification({
        title: 'Info',
        message: `${file.imageName} ${message} and will be replaced!`,
        color: 'blue',
      });
    }
  }

  const dataURI = await zipWriter.close();
  return dataURI;
};
