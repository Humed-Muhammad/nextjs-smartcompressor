import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@/types';
import { CompressedResultTypes } from '@/utils/types';

const selectFiles = (state: RootState) => state?.fileSlice?.files;

export const selectCompressedImages: (
  state: RootState
) => CompressedResultTypes[] | undefined = createSelector(
  [selectFiles],
  (state) => state
);
