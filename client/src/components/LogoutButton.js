// src/components/LogoutButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // React Router for navigation

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic (e.g., clearing tokens)
    navigate('/'); // Redirect to homepage or login page
  };

  return (
    <button className="logout-btn" onClick={handleLogout}>
      Your Name ▼
    </button>
  );
};

export default LogoutButton;
