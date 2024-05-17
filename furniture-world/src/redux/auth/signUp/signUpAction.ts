import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { backendURL } from '../../../constant/api/backendURL';
import { IUserSignUpData } from '../../../pages/signUp/SignUp';

export const userSignUp = createAsyncThunk('auth/signUp', async (userData: IUserSignUpData, { rejectWithValue }) => {
    try {
        const config = {
            headers: {
                'content-type': 'application/json',
            },
        };
        axios.post(`${backendURL}/v1/user/signUp`, userData, config);
    } catch (error: any) {
        if (error.response && error.response.message) return rejectWithValue(error.response.message);
        else return rejectWithValue(error.response);
    }
});
