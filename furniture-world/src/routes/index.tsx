import { createBrowserRouter } from 'react-router-dom';
import { Navbar } from '../components/navbar/Navbar';
import { HomePage } from '../pages/Home';
import { ShopPage } from '../pages/Shop';
import { CheckoutPage } from '../pages/Checkout';
import { ContactPage } from '../pages/Contact';
import { ProductDetailsPage } from '../pages/ProductDetail';
import { AboutPage } from '../pages/About';
import { LoginPage } from '../pages/login/Login';
import { RegisterPage } from '../pages/login/Register';

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
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: 'register',
        element: <RegisterPage />,
    },
]);
