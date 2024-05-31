import { configureStore } from '@reduxjs/toolkit';
import filtersSlice from '../components/Filters/filtersSlice';
import authSlice from './api/authSlice';
import { navbarPathSlice } from './navbar';
import { productSlice } from './product/cartSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        filter: filtersSlice.reducer,
        product: productSlice.reducer,
        navbarPath: navbarPathSlice.reducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});

export type IRootState = ReturnType<typeof store.getState>;
export type IAppDispatch = typeof store.dispatch;
