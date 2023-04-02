import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { MainLayout } from './layouts';

const App: FC = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout />}>
                <Route index element={<Navigate to={'home'} />} />
                <Route path={'/home'} element={<HomePage />} />
            </Route>
        </Routes>
    );
};

export { App };
