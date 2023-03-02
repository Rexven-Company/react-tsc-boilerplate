import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Loading from '../components/loader/Loader';
import Layout from '../layout/Layout';

const UserRouter: React.FC = (props) => {
  const { session, isLoading } = useAuth();
  let location = useLocation();

  if (isLoading || session === undefined) {
    return <Loading />;
  }
  if (session === null) {
    return <Navigate to={'/login'} state={{ from: location }} replace />;
  }

  return (
    <Layout>
      {' '}
      <Outlet />
    </Layout>
  );
};
export default UserRouter;
