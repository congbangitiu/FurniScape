import { configureStore } from '@reduxjs/toolkit';
import filtersSlice from '../components/userComponents/Filters/filtersSlice';
import authSlice from './api/authSlice';
import { navbarPathSlice } from './navbar';
import { cartSlice } from './userApi/cart/cartSlice';
import { productsSlice } from './products/productsSlice';
import { orderSlice } from './order/orderSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        filter: filtersSlice.reducer,
        cart: cartSlice.reducer,
        navbarPath: navbarPathSlice.reducer,
        products: productsSlice.reducer,
        order: orderSlice.reducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});

export type IRootState = ReturnType<typeof store.getState>;
export type IAppDispatch = typeof store.dispatch;
