import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { backendURL } from 'src/constant/api/backendURL';

// const baseQuery = fetchBaseQuery({
//     baseUrl: backendURL,
//     credentials: 'include',
//     prepareHeaders: (headers,{getState: })=> {
//         const token =  getState()?.auth.token;
//         if(token) {
//             headers.set('Authorization',`bearer ${token}`);
//             return headers;
//         }
//     }
// })

// export const authApi = createApi(

// )

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        // base url of backend API
        baseUrl: 'http://127.0.0.1:5000/',
        // prepareHeaders is used to configure the header of every request and gives access to getState which we use to include the token from the store
        // prepareHeaders: (headers, { getState }) => {
        //     const token = getState().auth.userToken;
        //     if (token) {
        //         // include token in req header
        //         headers.set('authorization', `Bearer ${token}`);
        //         return headers;
        //     }
        // },
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
