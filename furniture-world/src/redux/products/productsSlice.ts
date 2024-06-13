import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { backendURL } from 'src/constant/api/backendURL';
import { IRootState } from '../store';
import { getAllProductsAPI } from 'src/constant/api/productsAPI';
import axios, { AxiosResponse } from 'axios';
export interface IProduct {
    id: string;
    name: string;
    price: number;
    category: string;
    image_dir: any;
    description: string;
    discount?: number;
    status: string;
    quantity: number;
    createdAt: string;
    updatedAt: string;
}
export const fetchProducts = createAsyncThunk<IProduct[], void>(
    'products/getAllProducts',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`${backendURL}/product/getProducts`);

            const products: IProduct[] = data.map((product: any) => {
                const formattedTime = (dateObject: Date) => {
                    const hours = dateObject.getHours().toString().padStart(2, '0');
                    const minutes = dateObject.getMinutes().toString().padStart(2, '0');
                    const day = dateObject.getDate().toString().padStart(2, '0');
                    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0'); // Month starts from 0
                    const year = dateObject.getFullYear();

                    return `${hours}:${minutes} - ${day}/${month}/${year}`;
                };

                const createdAt = formattedTime(new Date(product.createdAt));
                const updatedAt = formattedTime(new Date(product.updatedAt));

                return {
                    id: product.id,
                    name: product.name,
                    price: `${product.price}$`,
                    quantity: product.quantity,
                    category: product.category,
                    img_dir: product.img_dir,
                    description: product.description,
                    discount: undefined,
                    status: product.status,
                    createdAt: createdAt,
                    updatedAt: updatedAt,
                };
            });
            return products;
        } catch (error: any) {
            if (error.response && error.response.message) return rejectWithValue(error.response.message);
            else return rejectWithValue(error.message);
        }
    },
);

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
