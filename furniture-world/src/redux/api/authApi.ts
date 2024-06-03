import { createAsyncThunk } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import axios from 'axios';
import { backendURL } from 'src/constant/api/backendURL';
import { IUserSignInData } from 'src/pages/signIn/SignIn';
import { IUserSignUpData } from 'src/pages/signUp/SignUp';
import { IRootState } from '../store';

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

export const userLogin = createAsyncThunk('auth/signin', async (userData: IUserSignInData, { rejectWithValue }) => {
    try {
        const { data } = await axios.post(`${backendURL}/auth/signin`, userData, {
            headers: {
                'content-type': 'application/json',
            },
        });
        localStorage.setItem('accessToken', data?.userToken);
        return data;
    } catch (err: any) {
        if (err.response && err.response.message) {
            return rejectWithValue(err.response.message);
        } else {
            return rejectWithValue(err.message);
        }
    }
});

export const userSignUp = createAsyncThunk('auth/signup', async (userData: IUserSignUpData, { rejectWithValue }) => {
    try {
        const { data } = await axios.post(`${backendURL}/auth/signup`, userData, {
            headers: {
                'content-type': 'application/json',
            },
        });

        return data;
    } catch (error: any) {
        if (error.response && error.response.message) return rejectWithValue(error.response.message);
        else return rejectWithValue(error.response);
    }
});

// Future work
export const UserForgotPassword = createAsyncThunk(
    'auth/forgotPassword',
    async (userData: IUserSignUpData, { rejectWithValue }) => {
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
