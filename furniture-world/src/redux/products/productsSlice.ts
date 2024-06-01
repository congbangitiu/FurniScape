import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../cart/cartSlice';

export interface IProductInStock {
    product: IProduct;
    quantityInStock: number;
}

const initialState: IProductInStock[] = [];

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
});
