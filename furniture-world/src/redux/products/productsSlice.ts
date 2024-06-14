import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { backendURL } from 'src/constant/api/backendURL';
import { IRootState } from '../store';
import { getAllProductsAPI, getProductImageAPI, updateProductImageAPI } from 'src/constant/api/productsAPI';
import axios, { AxiosResponse } from 'axios';
import Cookies from 'js-cookie';
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

export interface IProductImage {
    image_dir: File;
    id: string;
}

export const fetchProducts = createAsyncThunk<IProduct[], void>(
    'products/getAllProducts',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await getAllProductsAPI();

            const products: IProduct[] = [];
            for (const product of data) {
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

                const productImage: any = await getProductImageAPI(product.id);
                const productImageUrl = URL.createObjectURL(productImage.data);
                products.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: product.quantity,
                    category: product.category,
                    image_dir: productImageUrl,
                    description: product.description,
                    discount: undefined,
                    status: product.status,
                    createdAt: createdAt,
                    updatedAt: updatedAt,
                });
            }

            return products;
        } catch (error: any) {
            if (error.response && error.response.message) return rejectWithValue(error.response.message);
            else return rejectWithValue(error.message);
        }
    },
);

export const updateProductImage = createAsyncThunk(
    'products/updateProductImage',
    async ({ image_dir, id }: IProductImage, { rejectWithValue }) => {
        try {
            const token = Cookies.get('accessToken');
            const response = await updateProductImageAPI(token, image_dir, id);

            return;
        } catch (err: any) {
            return rejectWithValue(err.message);
        }
    },
);

// export const fetchProductsImages = createAsyncThunk('products/getAllProductsImages', async (_, { rejectWithValue }) => {
//     try {
//         const response = await getAllProductsImagesAPI();

//         return response;
//     } catch (err: any) {
//         return rejectWithValue(err.message);
//     }
// });
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
            })
            .addCase(updateProductImage.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateProductImage.fulfilled, (state) => {
                state.status = 'succeed';
            })
            .addCase(updateProductImage.rejected, (state, { payload }) => {
                state.status = 'failed';
                state.error = payload ?? null;
            });
    },
});
