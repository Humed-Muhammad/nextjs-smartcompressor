import { RcFile } from 'antd/lib/upload';

export interface CompressedResultTypes {
  originalImage: RcFile | undefined;
  compressedImage: File;
  originalSize: number;
  compressedSize: number;
  imageName: string;
}

export interface RegisterMutationTypes {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
}
