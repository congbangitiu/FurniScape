import { createAsyncThunk, createSlice, isRejectedWithValue } from '@reduxjs/toolkit';
import axios from 'axios';
import { IRootState } from '../store';
import { UserForgotPassword, authApi, userSignIn, userSignOut, userSignUp } from './authApi';
import Cookies from 'js-cookie';

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

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signOut: (state) => {
            Cookies.remove('accessToken')
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
            .addCase(userSignIn.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(userSignIn.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.userData = payload;
                state.accessToken = payload.accessToken;
            })
            .addCase(userSignIn.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload ? payload : null;
            })
            // Sign Up
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
        // Sign Out
        // .addCase(userSignOut.fulfilled, (state) => {
        //     state.loading = false;
        //     state.userData = null;
        //     state.accessToken = null;
        // });
        // Forgot password
    },
});

export const { signOut, setCredentials } = authSlice.actions;
export default authSlice;

// export const currentToken = (state: IRootState) => state.authaccessToken.
