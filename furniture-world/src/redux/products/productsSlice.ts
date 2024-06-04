import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../cart/cartSlice';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { backendURL } from 'src/constant/api/backendURL';
import { IRootState } from '../store';
import { getAllProductsAPI } from 'src/constant/api/productsAPI';

export const fetchProducts = createAsyncThunk('products/getAllProducts', async (_, { rejectWithValue }) => {
    try {
        const products = await getAllProductsAPI();
        return products;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export interface IProductInStock {
    items: IProduct[];
    error: boolean | null;
    loading: boolean;
}

const initialState: IProductInStock = {
    items: [],
    error: null,
    loading: false,
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchProducts.fulfilled, (state, {payload: IProduct[]}) => {
            state.loading = false;
            state.items = payload
        })
        .addCase(fetchProducts.rejected, (state, {payload}) => {
            state.loading=false
            state.error = payload
        })
    },
});
