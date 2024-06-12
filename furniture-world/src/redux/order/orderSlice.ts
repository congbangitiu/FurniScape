import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ICartItems, IProduct } from '../userApi/cart/cartSlice';
import Cookies from 'js-cookie';
import { placeOrderAPI } from 'src/constant/api/orderAPI'
import { IProductListPlaceOrder } from 'src/pages/user/Checkout/Checkout';

export interface IOrder {
    items: IProduct[] | null;
    status: string | null;
    message: Object | null;
}

const initialState: IOrder = {
    items: null,
    status: null,
    message: null,
};

export const placeOrder = createAsyncThunk(
    'order/placeOrder',
    async (productsList: IProductListPlaceOrder, { rejectWithValue }) => {
        try {
            const token = Cookies.get('accessToken');
            const response = await placeOrderAPI(productsList, token);
            return response;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    },
);

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(placeOrder.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(placeOrder.fulfilled, (state, { payload }) => {
                state.status = 'succeed';
                // state.items = payload;
                state.message = payload ?? null;
            })
            .addCase(placeOrder.rejected, (state, { payload }) => {
                state.status = 'failed';
                state.message = payload ?? null;
            });
    },
});
