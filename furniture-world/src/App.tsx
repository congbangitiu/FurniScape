import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './app.scss';
import { UserRoutes } from './routes/userRoute/UserRoute';
import { AdminRoutes } from './routes/adminRoute/AdminRoutes';

function App() {
    return (
        <Routes>
            <Route path="/*" element={<UserRoutes />} />
            <Route path="/admin/*" element={<AdminRoutes />} />
        </Routes>
    );
}

export default App;
