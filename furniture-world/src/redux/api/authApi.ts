import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { backendURL } from "src/constant/api/backendURL";

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