// Login.js

import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState('');

  const handleLogin = async () => {
    try {
      // Send mobile number for verification
      const response = await axios.post('/api/verify-number', { mobileNumber });

      // If mobile number verification is successful, send OTP
      if (response.data.message === 'Mobile number verified successfully') {
        await axios.post('/api/send-otp', { to: mobileNumber });
        // Redirect to OTP verification page
        // You may use React Router to navigate to the OTP verification page
        // Example: history.push('/otp-verification');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Mobile Number"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
      />
      <button onClick={handleLogin}>Send OTP</button>
    </div>
  );
};

export default Login;
