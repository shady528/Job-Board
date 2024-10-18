// src/pages/SignupPage.js
import React from 'react';
import SignupForm from '../components/SignupForm';
// src/pages/SignupPage.js
import '../styles/SignupPage.css'; // Adjusted relative path


const SignupPage = () => {
  return (
    <div className="signup-page">
      <div className="signup-left">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley.
        </p>
      </div>

      <SignupForm />
    </div>
  );
};

export default SignupPage;
