import { createBrowserRouter } from 'react-router-dom';
import { Navbar } from '../components/navbar/Navbar';
import { HomePage } from '../pages/Home';
import { ShopPage } from '../pages/Shop';
import { CheckoutPage } from '../pages/Checkout';
import { ContactPage } from '../pages/Contact';
import { ProductDetailsPage } from '../pages/ProductDetail';
import { AboutPage } from '../pages/About';

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
                path: 'shop',
                element: <ShopPage />,
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
            {
                path: 'about',
                element: <AboutPage />,
            },
        ],
    },
]);