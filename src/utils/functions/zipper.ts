/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { BlobReader, Data64URIWriter, ZipWriter } from '@zip.js/zip.js';

import { CompressedResultTypes } from '../types';

export const zipper = async (files: CompressedResultTypes[]) => {
  const zipWriter = new ZipWriter(new Data64URIWriter('application/zip'));

  for (const file of files) {
    await zipWriter.add(file.imageName, new BlobReader(file.compressedImage));
  }

  const dataURI = await zipWriter.close();
  return dataURI;
};
