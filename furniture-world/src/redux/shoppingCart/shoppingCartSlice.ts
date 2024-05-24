import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
    name: 'shoppingCart',
    initialState: false,
    reducers: {
        setOpen: (state, { payload }) => {
            state = payload;
        },
    },
});
