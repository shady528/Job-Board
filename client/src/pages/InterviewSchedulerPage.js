// src/pages/InterviewSchedulerPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
// import Navbar from '../components/Navbar';
import '../styles/InterviewSchedulerPage.css';

const InterviewSchedulerPage = () => {
  const navigate = useNavigate();

  const handleCreateInterview = () => {
    navigate('/create-interview');
  };

  return (
    <div className="scheduler-page">
      <Sidebar />
      <div className="scheduler-content">
        {/* <Navbar /> */}
        <button
          className="create-interview-btn"
          onClick={handleCreateInterview}
        >
          Create Interview
        </button>
      </div>
    </div>
  );
};

export default InterviewSchedulerPage;
