import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectFiles = (state: RootState) => state?.fileSlice?.files;

export const selectCompressedImages = createSelector(
  [selectFiles],
  state => state,
);
