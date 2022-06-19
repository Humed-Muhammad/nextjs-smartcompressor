import { PayloadAction } from '@reduxjs/toolkit';
import { message } from 'antd';
import { put, takeLatest } from 'redux-saga/effects';

import { CompressedResultTypes } from '@/utils/types';

// eslint-disable-next-line import/no-cycle
import { fileSliceActions as actions } from '.';

function* getFilesSaga(action: PayloadAction<CompressedResultTypes[]>) {
  try {
    if (action.payload.length && action.payload) {
      yield put(actions.setImages(action.payload));
      yield put(actions.setProgressOff());
    }
  } catch (error) {
    message.error(`${error}`);
  }
}

export function* fileSliceSaga() {
  yield takeLatest(actions.getImages.type, getFilesSaga);
}
