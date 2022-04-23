/* eslint-disable no-param-reassign */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable import/no-cycle */
import { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@/utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from '@/utils/redux-injectors';
import { CompressedResultTypes } from '@/utils/types';

import { fileSliceSaga } from './saga';
import { FileSliceState } from './types';

export const initialState: FileSliceState = {
  files: [],
  isUploading: false,
  showProgress: false,
  requestDelete: false,
};

const slice = createSlice({
  name: 'fileSlice',
  initialState,
  reducers: {
    getImages(
      state,
      action: PayloadAction<Array<CompressedResultTypes | undefined>>
    ) {
      state.isUploading = true;
    },
    setImages(state, action: PayloadAction<any>) {
      state.isUploading = false;
      state.files.push(...action.payload);
    },
    setProgressOn(state) {
      state.showProgress = true;
    },
    setProgressOff(state) {
      state.showProgress = false;
    },
    deleteImage(state, action: PayloadAction<number>) {
      state.files.splice(action.payload, 1);
    },
    requestDelete(state) {
      state.requestDelete = !state.requestDelete;
    },
    deleteAllImages(state) {
      state.files = [];
    },
  },
});

export const { actions: fileSliceActions } = slice;

export const useFileSliceSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: fileSliceSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useFileSliceSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
