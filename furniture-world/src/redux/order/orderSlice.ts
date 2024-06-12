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
    image: any;
    product: string;
    unitPrice: string;
    quantity: number;
    category: string;
}

export interface IOrder {
    id: string;
    status: string;
    total: number;
    payment: string;
    createdAt: string;
    products: IProductOrder[];
}

export interface IOrderSlice {
    orderList: IOrder[] | null;
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
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    },
);

// get User Order List and products details of each order
export const getUserOrders = createAsyncThunk<IOrder[], void>('order/getUserOrders', async (_, { rejectWithValue }) => {
    try {
        const token = Cookies.get('accessToken');
        const { data } = await getUserOrdersAPI(token);

        const orders: IOrder[] = data.map((order: any) => {
            const dateObject = new Date(order.createdAt);

            const hours = dateObject.getHours().toString().padStart(2, '0');
            const minutes = dateObject.getMinutes().toString().padStart(2, '0');
            const day = dateObject.getDate().toString().padStart(2, '0');
            const month = (dateObject.getMonth() + 1).toString().padStart(2, '0'); // Month starts from 0
            const year = dateObject.getFullYear();

            const formattedDateTime = `${hours}:${minutes} - ${day}/${month}/${year}`;
            return {
                id: order.id,
                status: order.status,
                total: `$${order.total}`,
                payment: order.payment,
                createdAt: formattedDateTime,
                products: null,
            };
        });

        for (let order of orders) {
            const { data } = await getUserOrderDetailsAPI(order.id, token);
            order.products = data.products;
        }

        return orders;
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
            console.log(response);
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
            // .addCase(getUserOrderDetails.pending, (state) => {
            //     state.status = 'loading';
            // })
            // .addCase(getUserOrderDetails.fulfilled, (state, { payload }) => {
            //     state.status = 'succeed';
            //     // state.items = payload;
            //     state.message = payload ?? null;
            // })
            // .addCase(getUserOrderDetails.rejected, (state, { payload }) => {
            //     state.status = 'failed';
            //     state.message = payload ?? null;
            // })
            .addCase(getUserOrders.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getUserOrders.fulfilled, (state, { payload }) => {
                state.status = 'succeed';
                state.orderList = payload;
                state.message = payload ?? null;
            })
            .addCase(getUserOrders.rejected, (state, { payload }) => {
                state.status = 'failed';
                state.message = payload ?? null;
            });
    },
});
