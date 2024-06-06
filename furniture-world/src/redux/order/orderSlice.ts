import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ICartItems, IProduct } from '../cart/cartSlice';
import Cookies from 'js-cookie';
import { placeOrderAPI } from 'src/constant/api/orderAPI';
import { IRootState } from '../store';
import { useSelector } from 'react-redux';

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

const cartItems = useSelector((state: IRootState) => state.cart.items);

const placeOrder = createAsyncThunk('order/placeOrder', async (cartItems: ICartItems, { rejectWithValue }) => {
    try {
        const token = Cookies.get('accessToken');
        const items = cartItems.items.map(({ id, quantity }) => ({ id, quantity }));
        const response = await placeOrderAPI(items, token);
        return response;
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
                state.items = cartItems;
                state.message = payload ?? null;
            })
            .addCase(placeOrder.rejected, (state, { payload }) => {
                state.status = 'failed';
                state.message = payload ?? null;
            });
    },
});


// - Payment method khi banking thì response về tài khoản ngân hàng để chuyển
// - user request để coi lại order
// - admin có get order để xem được không
// - thêm props status vào products