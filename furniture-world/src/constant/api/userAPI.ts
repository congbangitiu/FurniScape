import { apiClient } from './backendURL';

export const getUserInfoAPI = (token: any) =>
    apiClient.get('user/getuser', {
        headers: {
            authorization: token,
        },
    });
