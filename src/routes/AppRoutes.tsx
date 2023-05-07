import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from '../config/layout/DefaltLayout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<DefaultLayout component={Register} />} />
        <Route path="/" element={<DefaultLayout component={Login} />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
