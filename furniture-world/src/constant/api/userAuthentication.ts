import { backendURL } from './backendURL';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
interface UserData {
    id: number;
    firstName: string;
    email: string;
}

interface RegisterUserParams {
    firstName: string;
    email: string;
    password: string;
}

export const authApi = createApi({
    reducerPath: 'authentication',
    baseQuery: fetchBaseQuery({
        baseUrl: backendURL,
        // prepareHeaders: (headers)
        //     , { getState }) => {
        //     const token = getState.auth.userToken;
        //     if (token) headers.set('authorization', `Bearer ${token}`);
        //     return Headers;
        // },
    }),
    endpoints: (builder) => ({
        registerUser: builder.mutation<UserData, RegisterUserParams>({
            query: (params) => ({
                url: '/authentication/user/register',
                method: 'POST',
                body: params,
            }),
        }),
    }),
});
