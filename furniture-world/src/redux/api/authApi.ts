import { createAsyncThunk } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import axios from 'axios';
import { backendURL } from 'src/constant/api/backendURL';
import { IRootState } from '../store';
import Cookies from 'js-cookie';
import { IUserData } from './authSlice';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        // base url of backend API
        baseUrl: backendURL,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as IRootState).auth.accessToken;
            if (token) {
                // include token in req header
                headers.set('authorization', `Bearer ${token}`);
                return headers;
            }
        },
    }),
    endpoints: (builder) => ({
        getUserDetails: builder.query({
            query: () => ({
                url: 'api/user/profile',
                method: 'GET',
            }),
        }),
    }),
});

export const userSignIn = createAsyncThunk('auth/signin', async (userData: IUserData, { rejectWithValue }) => {
    try {
        const { data } = await axios.post(`${backendURL}/auth/signin`, userData, {
            headers: {
                'content-type': 'application/json',
            },
        });
        Cookies.set('accessToken', data.cookie, { expires: 7 });
        return data.validUser;
    } catch (err: any) {
        if (err.response && err.response.message) {
            return rejectWithValue(err.response.message);
        } else {
            return rejectWithValue(err.message);
        }
    }
});

export const userSignUp = createAsyncThunk('auth/signup', async (userData: IUserData, { rejectWithValue }) => {
    try {
        const { data } = await axios.post(`${backendURL}/auth/signup`, userData, {
            headers: {
                'content-type': 'application/json',
            },
        });

        return data.user;
        // const response = await axios.post(`${backendURL}/auth/signup`, userData);
        // return response.data;
    } catch (error: any) {
        if (error.response && error.response.message) return rejectWithValue(error.response.message);
        else return rejectWithValue(error.response);
    }
});

export const userSignOut = createAsyncThunk('auth/signout', async () => {
    localStorage.removeItem('accessToken');
});

// Future work
export const UserForgotPassword = createAsyncThunk(
    'auth/forgotPassword',
    async (userData: IUserData, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(`${backendURL}/api/forgotPassword`, userData, {
                headers: {
                    'content-type': 'application/json',
                },
            });
            return data;
        } catch (error: any) {
            if (error.response && error.response.message) return rejectWithValue(error.response.message);
            else return rejectWithValue(error.response);
        }
    },
);
