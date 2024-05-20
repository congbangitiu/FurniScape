import { createBrowserRouter } from 'react-router-dom';
import { Navbar } from '../components/navbar/Navbar';
import { HomePage } from '../pages/Home';
import { ShopPage } from '../pages/Shop';
import { CheckoutPage } from '../pages/Checkout/Checkout';
import { ContactPage } from '../pages/Contact';
import { ProductDetailsPage } from '../pages/ProductDetail';
import { AboutPage } from '../pages/About';
import { ProfilePage } from './../pages/Profile';
import { CartPage } from '../pages/Cart/Cart';

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
            {
                path: 'profile',
                element: <ProfilePage />,
            },
            {
                path: 'cart',
                element: <CartPage />,
            },
        ],
    },
]);
