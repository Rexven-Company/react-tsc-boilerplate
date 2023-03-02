import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Error404 from './Error404';

const ErrorPage = () => {
  return (
    <Routes>
      <Route path="404" index element={<Error404 />} />
      <Route index element={<Error404 />} />
    </Routes>
  );
};

export default ErrorPage;
