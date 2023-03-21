import React from 'react';
import '../styles/Portfolio.css'

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Description of Project 1',
      imageUrl: 'https://via.placeholder.com/150',
      demoUrl: 'https://example.com/demo',
      githubUrl: 'https://github.com/example/project1',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description of Project 2',
      imageUrl: 'https://via.placeholder.com/150',
      demoUrl: 'https://example.com/demo',
      githubUrl: 'https://github.com/example/project2',
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Description of Project 3',
      imageUrl: 'https://via.placeholder.com/150',
      demoUrl: 'https://example.com/demo',
      githubUrl: 'https://github.com/example/project3',
    },
    {
      id: 4,
      title: 'Project 4',
      description: 'Description of Project 4',
      imageUrl: 'https://via.placeholder.com/150',
      demoUrl: 'https://example.com/demo',
      githubUrl: 'https://github.com/example/project4',
    },
    {
      id: 5,
      title: 'Project 5',
      description: 'Description of Project 5',
      imageUrl: 'https://via.placeholder.com/150',
      demoUrl: 'https://example.com/demo',
      githubUrl: 'https://github.com/example/project5',
    },
    {
      id: 6,
      title: 'Project 6',
      description: 'Description of Project 6',
      imageUrl: 'https://via.placeholder.com/150',
      demoUrl: 'https://example.com/demo',
      githubUrl: 'https://github.com/example/project6',
    },
  ];

  return (
<div className='portfolio'>
  <h1>Portfolio</h1>
  {projects.map((project) => (
    <div key={project.id}>
      <h3>{project.title}</h3>
      <img src={project.imageUrl} alt={project.title} />
      <p>{project.description}</p>
      <a href={project.demoUrl}>Demo</a> | <a href={project.githubUrl}>GitHub</a>
    </div>
  ))}
</div>

  );
}

