import { CompressedResultTypes } from '@/utils/types';

/* --- STATE --- */
export interface FileSliceState {
  files: Array<CompressedResultTypes>;
  isUploading: boolean;
  showProgress: boolean;
  requestDelete: boolean;
}
