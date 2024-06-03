import { createAsyncThunk, createSlice, isRejectedWithValue } from '@reduxjs/toolkit';
import axios from 'axios';
import { IRootState } from '../store';
import { UserForgotPassword, authApi, userLogin, userSignUp } from './authApi';

const accessToken = localStorage.getItem('accessToken') ? localStorage.getItem('accessToken') : null;

interface IUserState {
    userData: any | null;
    accessToken: string | null;
    loading: boolean;
    error: Object | null;
}

const initialState: IUserState = {
    userData: null,
    accessToken,
    loading: false,
    error: null,
};

export default createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut: (state) => {
            localStorage.removeItem('accessToken');
            state.loading = false;
            state.error = null;
            state.userData = null;
            state.accessToken = null;
        },
        setCredentials: (state, { payload }) => {
            state.userData = payload;
        },
    },
    extraReducers: (builder) => {
        builder
            // Sign In
            .addCase(userLogin.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(userLogin.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.userData = payload;
                state.accessToken = payload.accessToken;
            })
            .addCase(userLogin.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload ? payload : null;
            })
            // Sing Up
            .addCase(userSignUp.pending, (state) => {
                state.loading = true;
            })
            .addCase(userSignUp.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.userData = payload;
                state.error = null;
            })
            .addCase(userSignUp.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload ? payload : null;
            });
        // Forgot password
    },
});

// export const currentToken = (state: IRootState) => state.authaccessToken.
