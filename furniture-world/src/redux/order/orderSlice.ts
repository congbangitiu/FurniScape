import { createAsyncThunk, createSlice, isRejectedWithValue } from '@reduxjs/toolkit';
import { ICartItems, IProduct } from '../userApi/cart/cartSlice';
import Cookies from 'js-cookie';
import { getOrderDetailsAPI, getUserOrdersAPI, placeOrderAPI } from 'src/constant/api/orderAPI';
import { IRootState } from '../store';
import { useSelector } from 'react-redux';
import { IProductListPlaceOrder } from 'src/pages/user/Checkout/Checkout';
import { backendURL } from 'src/constant/api/backendURL';
import axios from 'axios';

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
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    },
);

export const getOrderDetails = createAsyncThunk('order/getUserOrders', async (_, { rejectWithValue }) => {
    try {
        const token = Cookies.get('accessToken');
        const response = await getUserOrdersAPI(token);
        return response.data;
    } catch (error: any) {
        return rejectWithValue(error.message);
    }
});

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
            })
            .addCase(getOrderDetails.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getOrderDetails.fulfilled, (state, { payload }) => {
                state.status = 'succeed';
                // state.items = payload;
                state.message = payload ?? null;
            })
            .addCase(getOrderDetails.rejected, (state, { payload }) => {
                state.status = 'failed';
                state.message = payload ?? null;
            });
    },
});
