// src/components/Sidebar.js
import React from 'react';
import { FaHome } from 'react-icons/fa'; // Using react-icons library
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <FaHome className="sidebar-icon" />
    </div>
  );
};

export default Sidebar;
