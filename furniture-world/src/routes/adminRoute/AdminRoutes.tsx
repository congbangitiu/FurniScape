import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavbarAdmin } from 'src/components/adminComponents/navbar/Navbar';
import { AdminProfilePage } from 'src/pages/admin/AdminProfile';
import { HomePageAdmin } from 'src/pages/admin/homePage/HomePageAdmin';
import { OrderListPageAdmin } from 'src/pages/admin/orderListPage/OrderListPageAdmin';
import { ProductPageAdmin } from 'src/pages/admin/productsPage/ProductPageAdmin';
import { UserPageAdmin } from 'src/pages/admin/userPage/UsersPageAdmin';
import { SignInPage } from 'src/pages/signIn/SignIn';
import { SignUpPage } from 'src/pages/signUp/SignUp';

export const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<NavbarAdmin />}>
                <Route index element={<HomePageAdmin />} />
                <Route path="user" element={<UserPageAdmin />} />
                <Route path="products/:id" element={<ProductPageAdmin />} />
                <Route path="profile" element={<AdminProfilePage />} />
                <Route path="orders" element={<OrderListPageAdmin />} />
            </Route>
            <Route path="/admin/signIn" element={<SignInPage />} />
        </Routes>
    );
};
