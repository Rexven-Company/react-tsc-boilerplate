import React, { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
const Logout = () => {
  const { logout } = useAuth();
  useEffect(() => {
    console.log('he walla');
    logout?.();
  }, []);
  return <div>Logout</div>;
};

export default Logout;
