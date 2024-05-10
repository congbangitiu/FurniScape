import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { backendURL } from "../../../constant/api/backendURL";
import { IUserLoginData } from "../../../pages/login/Login";

export const userLogin = createAsyncThunk('auth/login', async (userData: IUserLoginData, { rejectWithValue }) => {
    try {
        const config = {
            headers: {
                'content-type': 'application/json',
            },
        };
        const { data } = await axios.post(`${backendURL}/v1/user/login`, userData, config);
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

