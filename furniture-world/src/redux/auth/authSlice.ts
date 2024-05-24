import { createAsyncThunk, createSlice, isRejectedWithValue } from '@reduxjs/toolkit';
import axios from 'axios';
import { userLogin } from './signIn/signInAction';
import { userSignUp } from './signUp/signUpAction';
import { IRootState } from '../store';

const userToken = localStorage.getItem('userToken') ? localStorage.getItem('userToken') : null;

interface IUserLoginState {
    userData: any | null;
    userToken: string | null;
    loading: boolean;
    error: Object | null;
}

const initialState: IUserLoginState = {
    userData: null,
    userToken,
    loading: false,
    error: null,
};

export default createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut: (state) => {
            localStorage.removeItem('userToken');
            state.loading = false;
            state.error = null;
            state.userData = null;
            state.userToken = null;
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
                state.userToken = payload.userToken;
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
                state.error = null;
            })
            .addCase(userSignUp.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload ? payload : null;
            });
    },
});

// export const currentToken = (state: IRootState) => state.auth.userToken