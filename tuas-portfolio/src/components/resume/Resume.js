import React from 'react';

function Resume() {
  const proficiencies = [
    'JavaScript',
    'React',
    'HTML',
    'CSS',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Git',
  ];

  return (
    <div>
      <h1>Resume</h1>
      <p>Download my resume <a href="/resume.pdf" download>here</a>.</p>
      <h2>Proficiencies</h2>
      <ul>
        {proficiencies.map((proficiency) => (
          <li key={proficiency}>{proficiency}</li>
        ))}
      </ul>
    </div>
  );
}

export default Resume;
