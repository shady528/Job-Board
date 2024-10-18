// src/components/SignupForm.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/SignupForm.css';

const SignupForm = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Perform any validation or state management here (optional)

    // Redirect to the OTP Verification Page
    navigate('/otp-verification');
  };

  return (
    <div className="signup-form">
      <h2>Sign Up</h2>
      <p>Lorem Ipsum is simply dummy text</p>
      
      
<form onSubmit={handleSubmit}>
  <input input type="text" placeholder="Name" required />
  <input type="tel" placeholder="Phone no." required />
  <input type="text" placeholder="Company Name" required />
  <input type="email" placeholder="Company Email" required />
  <input type="number" placeholder="Employee Size" required />

  <small>
    By clicking on proceed you will accept our{' '}
    <a href="#">Terms & Conditions</a>
  </small>

  <button type="submit">Proceed</button>
</form>

    </div>
  );
};

export default SignupForm;
