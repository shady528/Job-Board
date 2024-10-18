// src/pages/CreateInterviewPage.js
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
// import Navbar from '../components/Navbar';
import '../styles/CreateInterviewPage.css';

const CreateInterviewPage = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    jobDescription: '',
    experienceLevel: '',
    candidateEmail: '',
    endDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add logic to submit form data to the backend or API
  };

  return (
    <div className="create-interview-page">
      <Sidebar />
      <div className="interview-content">
        {/* <Navbar /> */}
        <form className="interview-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Job Title</label>
            <input
              type="text"
              name="jobTitle"
              placeholder="Enter Job Title"
              value={formData.jobTitle}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Job Description</label>
            <textarea
              name="jobDescription"
              placeholder="Enter Job Description"
              value={formData.jobDescription}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label>Experience Level</label>
            <select
              name="experienceLevel"
              value={formData.experienceLevel}
              onChange={handleChange}
              required
            >
              <option value="">Select Experience Level</option>
              <option value="junior">Junior</option>
              <option value="mid">Mid</option>
              <option value="senior">Senior</option>
            </select>
          </div>

          <div className="form-group">
            <label>Add Candidate</label>
            <input
              type="email"
              name="candidateEmail"
              placeholder="xyz@gmail.com"
              value={formData.candidateEmail}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>End Date</label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="send-btn">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateInterviewPage;
