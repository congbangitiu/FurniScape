import { reducer } from 'redux-form';
import { IUserRegisterData } from '../../../pages/signUp/SignUp';
import { createSlice } from '@reduxjs/toolkit';
import { userRegister } from './registerAction';

interface IUserRegisterState {
    userRegisterData: IUserRegisterData | null;
    loading: boolean;
    error: object | null;
}

const initialState: IUserRegisterState = {
    userRegisterData: null,
    loading: false,
    error: null,
};

export default createSlice({
    name: 'register',
    initialState,
    reducers: {
        register: (state, action) => {},
    },
    extraReducers: (builder) => {
        builder
            .addCase(userRegister.pending, (state) => {
                state.loading = true;
            })
            .addCase(userRegister.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.error = null;
            })
            .addCase(userRegister.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload ? payload : null;
            });
    },
});
