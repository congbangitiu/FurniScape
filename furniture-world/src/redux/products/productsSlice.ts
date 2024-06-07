import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../cart/cartSlice';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { backendURL } from 'src/constant/api/backendURL';
import { IRootState } from '../store';
import { getAllProductsAPI } from 'src/constant/api/productsAPI';
import axios, { AxiosResponse } from 'axios';

export const fetchProducts = createAsyncThunk('products/getAllProducts', async (_, { rejectWithValue }) => {
    try {
        const products = await axios.get(`${backendURL}/product/getProducts`);
        return products.data;
    } catch (error: any) {
        if (error.response && error.response.message) return rejectWithValue(error.response.message);
        else return rejectWithValue(error.message);
    }
});

export interface IProductInStock {
    items: IProduct[];
    error: Object | null;
    status: string;
}

const initialState: IProductInStock = {
    items: [],
    error: null,
    status: 'idle',
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, { payload }) => {
                state.status = 'succeed';
                state.items = payload;
            })
            .addCase(fetchProducts.rejected, (state, { payload }) => {
                state.status = 'failed';
                state.error = payload ?? null;
            });
    },
});
