// PrivateRoute.js
import React from 'react';
import { Route, Redirect, Switch,  } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthenticated, isVerified, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated && isVerified ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

export default PrivateRoute;
