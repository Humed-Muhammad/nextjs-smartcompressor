/* eslint-disable no-unsafe-optional-chaining */
import { message } from 'antd';
import { UploadFile } from 'antd/lib/upload/interface';
import imageCompression from 'browser-image-compression';

interface Options {
  /** @default Number.POSITIVE_INFINITY */
  maxSizeMB?: number;
  /** @default undefined */
  maxWidthOrHeight?: number;
  /** @default false */
  useWebWorker?: boolean;
  /** @default 10 */
  maxIteration?: number;
  /** Default to be the exif orientation from the image file */
  exifOrientation?: number;
  /** A function takes one progress argument (progress from 0 to 100) */
  onProgress?: (progress: number) => void;
  /** Default to be the original mime type from the image file */
  fileType?: string;
  /** @default 1.0 */
  initialQuality?: number;
}
export async function handleImageCompression(
  { originFileObj }: UploadFile<File>,
  compressionRate?: number
) {
  const options: Options = {
    maxSizeMB: 5,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
    initialQuality: Number(compressionRate) / 100,
  };
  try {
    // @ts-ignore
    return await imageCompression(originFileObj, options).then((data) => {
      return {
        originalImage: originFileObj,
        compressedImage: data,
        // @ts-ignore
        originalSize: originFileObj?.size / 1024,
        compressedSize: data.size / 1024,
        imageName: data.name,
      };
    });
  } catch (error) {
    return message.error(`${error}`);
  }
}
