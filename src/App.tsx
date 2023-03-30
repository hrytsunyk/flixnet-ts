import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

const App: FC = () => {
    return (
        <Routes>
            <Route index element={<Navigate to={'home'} />} />
            <Route path={'/home'} element={<HomePage />} />
        </Routes>
    );
};

export { App };
