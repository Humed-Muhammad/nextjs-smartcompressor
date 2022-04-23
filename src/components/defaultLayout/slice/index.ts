import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { defaultSliceSaga } from './saga';
import { DefaultSliceState } from './types';

export const initialState: DefaultSliceState = {
  error: false,
  errorMessage: '',
};

const slice = createSlice({
  name: 'defaultSlice',
  initialState,
  reducers: {
    getError(state, action: PayloadAction<string>) {
      state.error = true;
    },
    setError(state, action: PayloadAction<string>) {
      state.errorMessage = action.payload;
    },
  },
});

export const { actions: defaultSliceActions } = slice;

export const useDefaultSliceSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: defaultSliceSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useDefaultSliceSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
