import { createSlice } from '@reduxjs/toolkit';
import Item from 'antd/es/list/Item';

export interface IProduct {
    id: string;
    name: string;
    price: number;
}

// quantity each type of product
export interface ICartItem {
    product: IProduct;
    quantity: number;
}

export interface ICartState {
    items: ICartItem[];
}

const initialState: ICartState = { items: [] };

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.product.id === newItem.product.id);
            if (existingItem) {
                existingItem.quantity += newItem.quantity;
            } else {
                state.items.push(newItem);
            }
        },
        removeItem: (state, action) => {
            const productId = action.payload;
            state.items = state.items.filter((item) => item.product.id !== productId);
        },
        updateItemQuantity: (state, action) => {
            const { productId, quantity } = action.payload;
            const itemToUpdate = state.items.find((item) => item.product.id === productId);
            if (itemToUpdate) {
                itemToUpdate.quantity += quantity;
            }
        },
    },
});

export const { addItem, removeItem, updateItemQuantity } = cartSlice.actions;
