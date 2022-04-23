import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import type { AppDispatch, RootState } from 'utils/types/rootstate';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
