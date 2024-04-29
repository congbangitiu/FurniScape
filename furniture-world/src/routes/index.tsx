import { createBrowserRouter } from 'react-router-dom';
import { Navbar } from '../components/navbar/Navbar';
import { HomePage } from '../pages/Home';
import { ProductsPage } from '../pages/Products';
import { CheckoutPage } from '../pages/Checkout';
import { ContactPage } from '../pages/Contact';
import { ProductDetailsPage } from '../pages/ProductDetail';

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <Navbar />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'products',
                element: <ProductsPage />,
                children: [
                    {
                        path: 'products/productDetails',
                        element: <ProductDetailsPage />,
                    },
                ],
            },
            {
                path: 'contact',
                element: <ContactPage />,
            },
            {
                path: 'checkout',
                element: <CheckoutPage />,
            },
        ],
    },
]);
