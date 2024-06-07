import { apiClient } from './backendURL';

export const placeOrderAPI = (items: any, token: any) =>
    apiClient.post('order/placeOrder', items, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });
