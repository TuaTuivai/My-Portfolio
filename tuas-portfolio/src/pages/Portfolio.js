import React from "react";
import "../styles/Portfolio.css";

const projects = [
  {
    id: 1,
    title: "Project 1",
    image: "https://via.placeholder.com/200x200",
    github: "https://github.com/yourusername/project1",
  },
  {
    id: 2,
    title: "Project 2",
    image: "https://via.placeholder.com/200x200",
    github: "https://github.com/yourusername/project2",
  },
  {
    id: 3,
    title: "Project 3",
    image: "https://via.placeholder.com/200x200",
    github: "https://github.com/yourusername/project2",
  },
  {
    id: 4,
    title: "Project 4",
    image: "https://via.placeholder.com/200x200",
    github: "https://github.com/yourusername/project2",
  },
  {
    id: 5,
    title: "Project 5",
    image: "https://via.placeholder.com/200x200",
    github: "https://github.com/yourusername/project2",
  },
  {
    id: 6,
    title: "Project 6",
    image: "https://via.placeholder.com/200x200",
    github: "https://github.com/yourusername/project2",
  },
  
  // Add more projects here
];

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1 className="portfolio-title">My Portfolio</h1>
      <div className="projects">
        {projects.map((project) => (
          <div key={project.id} className="project">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
