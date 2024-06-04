import { createSlice } from '@reduxjs/toolkit';
import Item from 'antd/es/list/Item';
import { assets } from 'src/assets';

export interface IProduct {
    id: string;
    name: string;
    price: number;
    category: string;
    image_dir: any;
    description: string;
    discount?: number;
    status?: string;
    quantity: number;
}

export interface ICartItems {
    items: IProduct[];
    totalPrice: number;
}

const initialState: ICartItems = { items: [], totalPrice: 0 };
// const initialState: ICartItems = {
//     items: [
//         {
//             id: '0',
//             image_dir: assets.image1,
//             name: 'Product 1',
//             category: 'CategoryA',
//             price: 50,
//             description: 'none',
//             quantity: 1,
//         },
//         {
//             id: '1',
//             image_dir: assets.image1,
//             name: 'Product 2',
//             category: 'Category B',
//             price: 50,
//             description: 'none',
//             quantity: 1,
//         },
//         {
//             id: '2',
//             image_dir: assets.image1,
//             name: 'Product 3',
//             category: 'Category C',
//             price: 50,
//             description: 'none',
//             quantity: 1,
//         },
//         {
//             id: '3',
//             image_dir: assets.image1,
//             name: 'Product 4',
//             category: 'Category D',
//             price: 50,
//             description: 'none',
//             quantity: 1,
//         },
//     ],
//     totalPrice: 200,
// };

const totalPriceUpdating = (items: IProduct[]) => {
    return items.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...newItem, quantity: 1 });
            }
            state.totalPrice = totalPriceUpdating(state.items);
        },
        removeItem: (state, action) => {
            const productId = action.payload;
            state.items = state.items.filter((item) => item.id !== productId);
            state.totalPrice = totalPriceUpdating(state.items);
        },
        updateItemQuantity: (state, action) => {
            const { product, quantity } = action.payload;
            const itemToUpdate = state.items.find((item) => item.id === product.id);
            if (itemToUpdate) {
                itemToUpdate.quantity += quantity;
            } else {
                state.items.push({ ...product, quantity: quantity });
            }
        },
        increaseItemQuantity: (state, action) => {
            const productId = action.payload;
            const itemIncrease = state.items.find((item) => item.id === productId);

            if (itemIncrease) {
                itemIncrease.quantity += 1;
            }
            state.totalPrice = totalPriceUpdating(state.items);
        },
        decreaseItemQuantity: (state, action) => {
            const productId = action.payload;
            const itemDecrease = state.items.find((item) => item.id === productId);
            if (itemDecrease && itemDecrease.quantity > 1) {
                itemDecrease.quantity -= 1;
            } else if (itemDecrease && itemDecrease.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== productId);
            }
            state.totalPrice = totalPriceUpdating(state.items);
        },
    },
});

export const { addItem, removeItem, increaseItemQuantity, decreaseItemQuantity, updateItemQuantity } =
    cartSlice.actions;
