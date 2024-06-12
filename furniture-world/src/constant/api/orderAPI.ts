import { apiClient } from './backendURL';

export const placeOrderAPI = (items: any, token: any) =>
    apiClient.post('order/placeOrder', items, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
        },
    });

export const getOrderDetailsAPI = (items: any, token: any) =>
    apiClient.get('order/orderDetails', {
        headers: {
            authorization: token,
        },
        params: items,
    });

export const getUserOrdersAPI = (token: any) =>
    apiClient.get('order/getOrderList', {
        headers: {
            authorization: `${token}`,
        },
    });
