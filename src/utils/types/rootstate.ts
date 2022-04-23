import { configureAppStore } from 'store/configureStore';

const store = configureAppStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
