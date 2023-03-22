import React from 'react';
import '../styles/Resume.css';

export default function Resume() {
  const frontEndSkills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Responsive Design',
    'Bootstrap',
    'Sass',
  ];

  const backEndSkills = [
    'Node.js',
    'Express.js',
    'MongoDB',
    'SQL',
    'RESTful APIs',
    'Authentication & Authorization',
    'Version Control (Git)',
  ];

  const bootcamp = {
    name: 'Full Stack Web Developer Bootcamp',
    institution: 'UCLA EXT Bootcamp',
    duration: '6 months',
    description:
      'An intensive, project-based full stack web development bootcamp covering a wide range of modern web technologies and best practices.',
  };

  return (
    <div className="resume-container">
    <h1>Resume</h1>
    <p>
      Download my resume <a href="/resume.pdf" download>here</a>.
    </p>
  
    <section>
      <h2>Education</h2>
      <div className="card">
        <h3>{bootcamp.name}</h3>
        <h4>{bootcamp.institution}</h4>
        <h5>{bootcamp.duration}</h5>
        <p>{bootcamp.description}</p>
      </div>
    </section>
  
    <section>
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="card">
          <h3>Front End</h3>
          <ul>
            {frontEndSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h3>Back End</h3>
          <ul>
            {backEndSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  </div>
   );
  }  