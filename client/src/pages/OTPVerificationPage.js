// src/pages/OTPVerificationPage.js
import React from 'react';
import '../styles/OTPVerificationPage.css'; // Styling for this page
import { FaEnvelope} from 'react-icons/fa'; // Icons for email & mobile
import { FaMobileAlt } from 'react-icons/fa'; // Icons for email & mobile


const OTPVerificationPage = () => (
  <div className="otp-verification-page">
    {/* <nav className="navbar">
      <img src="/assets/cuvette.png" alt="Cuvette Logo" className="logo" />
      <a href="#" className="contact-link">Contact</a>
    </nav> */}

    <div className="content">
      <div className="text">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text since the 1500s.
        </p>
      </div>

      <div className="otp-card">
        <h2>Sign Up</h2>
        <p>Lorem Ipsum is simply dummy text</p>

        <div className="input-group">
          <FaEnvelope className="icon" />
          <input type="text" placeholder="Email OTP" />
          <button className="verify-btn">Verify</button>
        </div>

        <div className="input-group">
          <FaMobileAlt className="icon" />
          <input type="text" placeholder="Mobile OTP" />
          <button className="verify-btn">Verify</button>
        </div>
      </div>
    </div>
  </div>
);

export default OTPVerificationPage;
