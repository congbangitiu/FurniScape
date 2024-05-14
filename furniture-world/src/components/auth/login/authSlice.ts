import { createAsyncThunk, createSlice, isRejectedWithValue } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUserLoginData } from '../../../pages/signIn/SignIn';
import { backendURL } from '../../../constant/api/backendURL';
import { userLogin } from './authAction';

const userToken = localStorage.getItem('userToken') ? localStorage.getItem('userToken') : null;

interface IUserLoginState {
    userLoginData: IUserLoginData | null;
    userToken: string | null;
    loading: boolean;
    error: Object | null;
}

const initialState: IUserLoginState = {
    userLoginData: null,
    userToken,
    loading: false,
    error: null,
};

export default createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        signIn: (state, action) => {},
    },
    extraReducers: (builder) => {
        builder
            .addCase(userLogin.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(userLogin.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.userLoginData = payload;
                state.userToken = payload.userToken;
            })
            .addCase(userLogin.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload ? payload : null;
            });
    },
});
