// JobCard.jsx
import React from 'react';

// Child Component that receives props
const JobCard = ({ title, company, salary, location, type, skills, onApply }) => {
  return (
    <div className="job-card">
      <h2>{title}</h2>
      <p className="company">{company}</p>
      <div className="job-details">
        <span>💰 ${salary}/year</span>
        <span>📍 {location}</span>
        <span>🏢 {type}</span>
      </div>
      <div className="skills">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
      <button 
        className="apply-btn" 
        onClick={() => onApply(title)}
      >
        Apply Now
      </button>
    </div>
  );
};

// Parent Component that passes props
const JobList = () => {
  const handleApply = (jobTitle) => {
    alert(`Applying for: ${jobTitle}`);
  };

  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech Corp",
      salary: 90000,
      location: "Remote",
      type: "Full-time",
      skills: ["React", "JavaScript", "CSS"]
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "Data Systems",
      salary: 110000,
      location: "New York",
      type: "Full-time",
      skills: ["Node.js", "Python", "SQL"]
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "Data Systems",
      salary: 110000,
      location: "New York",
      type: "Full-time",
      skills: ["Node.js", "Python", "SQL"]
    }
  ];

  return (
    <div className="job-list">
      <h1>Available Jobs</h1>
      {jobs.map(job => (
        <JobCard
          key={job.id}
          title={job.title}
          company={job.company}
          salary={job.salary}
          location={job.location}
          type={job.type}
          skills={job.skills}
          onApply={handleApply}
        />
      ))}
    </div>
  );
};

export default JobList;