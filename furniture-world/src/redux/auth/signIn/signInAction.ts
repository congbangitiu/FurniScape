import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { backendURL } from '../../../constant/api/backendURL';
import { IUserSignInData } from '../../../pages/signIn/SignIn';
import { createApi } from '@reduxjs/toolkit/query';

export const userLogin = createAsyncThunk('auth/signIn', async (userData: IUserSignInData, { rejectWithValue }) => {
    try {
        const config = {
            headers: {
                'content-type': 'application/json',
            },
        };
        const { data } = await axios.post(`${backendURL}/v1/user/signIn`, userData, config);
        localStorage.setItem('userToken', data?.userToken);
        return data;
    } catch (err: any) {
        if (err.response && err.response.message) {
            return rejectWithValue(err.response.message);
        } else {
            return rejectWithValue(err.message);
        }
    }
});
