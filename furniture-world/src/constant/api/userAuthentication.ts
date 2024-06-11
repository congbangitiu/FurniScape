import { apiClient, backendURL } from './backendURL';
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

export const getUserInfoApi = (token: any) => {
    apiClient.get('user/getuser', {
        headers: {
            'content-type': 'application/json',
            authorization: 'Bearer ' + token,
        },
    });
};

// export const getUserInfoApi = (token: any) => {
//     apiClient.get('user/getuser', token);
// };
