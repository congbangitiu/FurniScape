import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './app.scss';
import { HomePage } from './pages/Home';
import { ShopPage } from './pages/Shop/Shop';
import { ProductDetailsPage } from './pages/ProductDetail/ProductDetail';
import { CheckoutPage } from './pages/Checkout/Checkout';
import { ContactPage } from './pages/Contact';
import Navbar from './components/navbar/Navbar';
import { AboutPage } from './pages/About';
import { SignUpPage } from './pages/signUp/SignUp';
import { CartPage } from './pages/Cart/Cart';
import { ProfilePage } from './pages/Profile';
import { SignInPage } from './pages/signIn/SignIn';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navbar />}>
                <Route index element={<HomePage />} />
                <Route path="shop" element={<ShopPage />} />
                <Route path="shop/products/:id" element={<ProductDetailsPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="checkout" element={<CheckoutPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="profile" element={<ProfilePage />} />
                <Route path="cart" element={<CartPage />} />
            </Route>
            <Route path="/signIn" element={<SignInPage />} />
            <Route path="/signUp" element={<SignUpPage />} />
        </Routes>
    );
}

export default App;
