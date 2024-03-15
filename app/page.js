"use client";
import Dashboard from '@/components/Dashboard'; // Change to Page
import Login from '@/components/Login';
import PrivateRoute from '@/components/PrivateRoute';
import ProjectImageUpload from './ProjectImageUpload';
import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import FileUploadForm from './CategoryUpload';
import LeftVerticalMenu from '@/components/LeftVerticalMenu';

const Page = () => {
  // Simulate authentication and OTP verification status
  const isAuthenticated = true; // Replace with actual authentication status
  const isVerified = true; // Replace with actual OTP verification status

  return (
    <>
      <FileUploadForm/>
      <ProjectImageUpload/>
      {/* <LeftVerticalMenu/> */}
     {/* <Dashboard/> */}
    {/* <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute
          path="/dashboard"
          component={Dashboard}
          isAuthenticated={isAuthenticated}
          isVerified={isVerified}
        />
        <Redirect from="/" to="/dashboard" />
      </Switch>
    </Router> */}
    </>
  );
};

export default Page;