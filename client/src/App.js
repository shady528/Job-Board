// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router
import SignupPage from './pages/SignupPage';
import OTPVerificationPage from './pages/OTPVerificationPage';
import Navbar from './components/Navbar'; // Import Navbar
import InterviewSchedulerPage from './pages/InterviewSchedulerPage';
import CreateInterviewPage from './pages/CreateInterviewPage';

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar remains consistent across all pages */}
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/otp-verification" element={<OTPVerificationPage />} />
        <Route path="/schedule" element={<InterviewSchedulerPage />} />
        <Route path="/create-interview" element={<CreateInterviewPage />} />
      </Routes>
    </Router>
  );
}

export default App;
