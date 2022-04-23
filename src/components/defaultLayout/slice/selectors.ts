import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.defaultSlice || initialState;

export const selectDefaultSlice = createSelector([selectSlice], state => state);
