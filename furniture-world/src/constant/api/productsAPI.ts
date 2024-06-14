import { apiClient } from './backendURL';

export const getAllProductsAPI = () => apiClient.get('product/getProducts');

export const getProductImageAPI = (id: string) =>
    apiClient.get('product/getProductPicture', {
        params: {
            id: id,
        },
        responseType: 'blob',
    });

export const updateProductImageAPI = (token: any, img: File, id: string) => {
    const formData = new FormData();
    formData.append('file', img);

    apiClient.put('product/updateProductImage', formData, {
        headers: {
            authorization: token,
            'Content-Type': 'multipart/form-data',
        },
        params: {
            id: id,
        },
    });
};

// export const updateProductImageAPI = async (token: any, img: File, id: string) => {
//     try {
//         const formData = new FormData();
//         formData.append('file', img);

//         const response = await apiClient.put('product/updateProductImage', formData, {
//             headers: {
//                 authorization: token,
//                 params: id,
//                 'Content-Type': 'multipart/form-data',
//             },
//         });

//         // Xử lý response từ server
//         if (response.status === 200) {
//             return response.data; // Trả về dữ liệu từ phản hồi nếu thành công
//         } else {
//             throw new Error(response.data.message); // Ném lỗi nếu server trả về message lỗi
//         }
//     } catch (error: any) {
//         throw new Error(error.message); // Đảm bảo xử lý lỗi một cách chính xác
//     }
// };
