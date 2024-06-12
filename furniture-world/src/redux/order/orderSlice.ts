import { createAsyncThunk, createSlice, isRejectedWithValue } from '@reduxjs/toolkit';
import { ICartItems, IProduct } from '../userApi/cart/cartSlice';
import Cookies from 'js-cookie';
import { getUserOrderDetailsAPI, getUserOrdersAPI, placeOrderAPI } from 'src/constant/api/orderAPI';
import { IRootState } from '../store';
import { useSelector } from 'react-redux';
import { IProductListPlaceOrder } from 'src/pages/user/Checkout/Checkout';
import { backendURL } from 'src/constant/api/backendURL';
import axios from 'axios';

export interface IProductOrder {
    product: string;
    unitPrice: string;
    quantity: number;
    total: number;
}

export interface IOrder {
    id: string;
    status: string;
    total: string;
    payment: string;
    createdAt: string;
    products: IProductOrder[] | null;
}

export interface IOrderInfo {
    order: IOrder[];
}

export interface IOrderSlice {
    orderList: IOrderInfo[] | null;
    status: string | null;
    message: Object | null;
}

const initialState: IOrderSlice = {
    orderList: null,
    status: null,
    message: null,
};

export const placeOrder = createAsyncThunk(
    'order/placeOrder',
    async (productsList: IProductListPlaceOrder, { rejectWithValue }) => {
        try {
            const token = Cookies.get('accessToken');
            const response = await placeOrderAPI(productsList, token);
            // const data: IOrder = { id, status, total, payment, createdAt };
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    },
);

export const getUserOrders = createAsyncThunk('order/getUserOrders', async (_, { rejectWithValue }) => {
    try {
        const token = Cookies.get('accessToken');
        const { data } = await getUserOrdersAPI(token);

        const order: IOrder[] = data.map((order: any) => ({
            id: order.id,
            status: order.status,
            total: order.status,
            payment: order.payment,
            createdAt: order.createdAt,
            products: null,
        }));

        return order;
    } catch (error: any) {
        return rejectWithValue(error.message);
    }
});

export const getUserOrderDetails = createAsyncThunk(
    'order/getUserOrderDetails',
    async (id: string, { rejectWithValue }) => {
        try {
            const token = Cookies.get('accessToken');
            const response = await getUserOrderDetailsAPI(id, token);
            return response.data;
        } catch (err: any) {
            return rejectWithValue(err.message);
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
                state.message = payload ?? null;
            })
            .addCase(placeOrder.rejected, (state, { payload }) => {
                state.status = 'failed';
                state.message = payload ?? null;
            })
            .addCase(getUserOrderDetails.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getUserOrderDetails.fulfilled, (state, { payload }) => {
                state.status = 'succeed';
                // state.items = payload;
                state.message = payload ?? null;
            })
            .addCase(getUserOrderDetails.rejected, (state, { payload }) => {
                state.status = 'failed';
                state.message = payload ?? null;
            })
            .addCase(getUserOrders.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getUserOrders.fulfilled, (state, { payload }) => {
                state.status = 'succeed';
                // state.orderList = payload;
                state.message = payload ?? null;
            })
            .addCase(getUserOrders.rejected, (state, { payload }) => {
                state.status = 'failed';
                state.message = payload ?? null;
            });
    },
});
