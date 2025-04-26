import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
  const isAdminLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';

  return isAdminLoggedIn ? element : <Navigate to="/login" />;
};

export default PrivateRoute;