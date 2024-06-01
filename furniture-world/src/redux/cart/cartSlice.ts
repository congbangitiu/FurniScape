import { createSlice } from '@reduxjs/toolkit';
import Item from 'antd/es/list/Item';
import { assets } from 'src/assets';

export interface IProduct {
    id: string;
    name: string;
    price: number;
    category: string;
    image: any;
    description: string;
    discount?: number;
    status?: string;
}

// quantity each type of product
export interface ICartItem {
    product: IProduct;
    quantity: number;
}

export interface ICartState {
    items: ICartItem[];
    totalPrice: number;
}

const initialState: ICartState = {
    items: [
        {
            product: {
                id: '0',
                image: assets.image1,
                name: 'Product 1',
                category: 'CategoryA',
                price: 50,
                description: 'none',
            },
            quantity: 1,
        },
        {
            product: {
                id: '1',
                image: assets.image1,
                name: 'Product 2',
                category: 'Category B',
                price: 50,
                description: 'none',
            },
            quantity: 1,
        },
        {
            product: {
                id: '2',
                image: assets.image1,
                name: 'Product 3',
                category: 'Category C',
                price: 50,
                description: 'none',
            },
            quantity: 1,
        },
        {
            product: {
                id: '3',
                image: assets.image1,
                name: 'Product 4',
                category: 'Category D',
                price: 50,
                description: 'none',
            },
            quantity: 1,
        },
    ],
    totalPrice: 200,
};

const totalPriceUpdating = (items: ICartItem[]) => {
    return items.reduce((total, item) => {
        return total + item.product.price * item.quantity;
    }, 0);
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.product.id === newItem.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({
                    product: newItem,
                    quantity: 1,
                });
            }
            state.totalPrice = totalPriceUpdating(state.items);
        },
        removeItem: (state, action) => {
            const productId = action.payload;
            state.items = state.items.filter((item) => item.product.id !== productId);
            state.totalPrice = totalPriceUpdating(state.items);
        },
        updateItemQuantity: (state, action) => {
            const { product, quantity } = action.payload;
            const itemToUpdate = state.items.find((item) => item.product.id === product.id);
            if (itemToUpdate) {
                itemToUpdate.quantity += quantity;
            } else {
                state.items.push({ product: product, quantity: quantity });
            }
        },
        increaseItemQuantity: (state, action) => {
            const productId = action.payload;
            const itemIncrease = state.items.find((item) => item.product.id === productId);

            if (itemIncrease) {
                itemIncrease.quantity += 1;
            }
            state.totalPrice = totalPriceUpdating(state.items);
        },
        decreaseItemQuantity: (state, action) => {
            const productId = action.payload;
            const itemDecrease = state.items.find((item) => item.product.id === productId);
            if (itemDecrease && itemDecrease.quantity > 1) {
                itemDecrease.quantity -= 1;
            } else if (itemDecrease && itemDecrease.quantity === 1) {
                state.items = state.items.filter((item) => item.product.id !== productId);
            }
            state.totalPrice = totalPriceUpdating(state.items);
        },
    },
});

export const { addItem, removeItem, increaseItemQuantity, decreaseItemQuantity, updateItemQuantity } =
    cartSlice.actions;
