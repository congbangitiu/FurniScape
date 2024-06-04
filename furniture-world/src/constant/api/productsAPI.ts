import { apiClient} from './backendURL';

export const getAllProductsAPI = () => apiClient.get('products/getProducts');
