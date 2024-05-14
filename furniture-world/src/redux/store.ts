import { configureStore } from '@reduxjs/toolkit';
import filtersSlice from '../components/Filters/filtersSlice';
import authSlice from '../components/auth/login/authSlice';

export const store = configureStore({
    reducer: {
        signIn: authSlice.reducer,
        filter: filtersSlice.reducer,
    },
});

export type IRootState = ReturnType<typeof store.getState>;
export type IAppDispatch = typeof store.dispatch;