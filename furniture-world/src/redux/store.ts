import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import filtersSlice from '../components/Filters/filtersSlice';
import signInSlice from './auth/signIn/signInSlice';
import authSlice from './auth/authSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        filter: filtersSlice.reducer,
    },
    // middleware: getDefaultMiddleware() => {
    //     getDefaultMiddleware().concat()
    // }
});

export type IRootState = ReturnType<typeof store.getState>;
export type IAppDispatch = typeof store.dispatch;
