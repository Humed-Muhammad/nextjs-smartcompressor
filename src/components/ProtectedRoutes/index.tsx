import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from 'utils/hooks/reactHooks';

const ProtectedRoutes = () => {
  const authenticated = useAuth();
  return authenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
