import { createAsyncThunk, createSlice, isRejectedWithValue } from '@reduxjs/toolkit';
import axios from 'axios';
import { backendURL } from '../../../constant/api/backendURL';
import { userLogin } from './signInAction';
import { IUserSignInData } from '../../../pages/signIn/SignIn';

const userToken = localStorage.getItem('userToken') ? localStorage.getItem('userToken') : null;

interface IUserLoginState {
    userSignInData: IUserSignInData | null;
    userToken: string | null;
    loading: boolean;
    error: Object | null;
}

const initialState: IUserLoginState = {
    userSignInData: null,
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
            state.userSignInData = null;
            state.userToken = null;
        },
        setCredentials: (state, { payload }) => {
            state.userSignInData = payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(userLogin.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(userLogin.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.userSignInData = payload;
                state.userToken = payload.userToken;
            })
            .addCase(userLogin.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload ? payload : null;
            });
    },
});

