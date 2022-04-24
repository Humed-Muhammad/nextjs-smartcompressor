import { DefaultSliceState } from '@/components/defaultLayout/slice/types';
import { FileSliceState } from '@/components/FileDrop/slice/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  fileSlice?: FileSliceState;
  defaultSlice?: DefaultSliceState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
