import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { backendURL } from '../../../constant/api/backendURL';
import { IUserRegisterData } from '../../../pages/signUp/SignUp';

export const userRegister = createAsyncThunk(
    'auth/register',
    async (userData: IUserRegisterData, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'content-type': 'application/json',
                },
            };
            const data = axios.post(`${backendURL}/v1/user/register`, config);
        } catch (error: any) {
            if (error.response && error.response.message) return rejectWithValue(error.response.message);
            else return rejectWithValue(error.response);
        }
    },
);
