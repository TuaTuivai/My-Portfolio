import React from "react";
import "../styles/Portfolio.css";
import MoodMixer from "../styles/Images/Mood-Mixer.gif";
import OnlyRecipes from "../styles/Images/Only-Recipes.gif";
import WeatherForecast from "../styles/Images/WeatherForecast.gif";
import Scheduler from "../styles/Images/Scheduler.png";
import EmployeeTracker from "../styles/Images/Employee-Tracker.gif";
import Backend from "../styles/Images/E-Commerce-BackEnd.gif";
import What2Game from "../styles/Images/what2gamegif.gif";

const projects = [
  {
    id: 1,
    title: "Mood Mixer",
    image: MoodMixer,
    github: "https://sieraford.github.io/mood-mixer/",
    description: "An interactive, client-side web application leveraging third-party APIs to deliver dynamic user experiences based on real-time mood input."
  },
  {
    id: 2,
    title: "Recipes",
    image: OnlyRecipes,
    github: "https://only-recipes-app.herokuapp.com/",
    description: "A full-stack collaborative platform designed for managing, searching, and organizing culinary data with user authentication."
  },
  {
    id: 3,
    title: "What2Game",
    image: What2Game,
    github: "https://github.com/erickjavalos/what2game",
    description: "A collaborative web application serving as a dynamic selector tool for gamers, streamlining game discovery through user preferences."
  },
  {
    id: 4,
    title: "Weather Forecast",
    image: WeatherForecast,
    github: "https://tuatuivai.github.io/Cloudy-With-A-Chance-Of-Meatballs/",
    description: "A weather dashboard utilizing server-side APIs to fetch and present multi-city data, featuring persistent local storage integration."
  },
  {
    id: 5,
    title: "Scheduler",
    image: Scheduler,
    github: "https://tuatuivai.github.io/WorkHardPlayHarder-Schedule/",
    description: "A dynamic work day calendar application built to track hourly tasks, optimize time management, and handle client-side data persistence."
  },
  {
    id: 6,
    title: "Employee Tracker",
    image: EmployeeTracker,
    github: "https://github.com/TuaTuivai/EmployeeOfTheMonth",
    description: "A command-line interface content management system designed for relational database integrity, managing company departments, roles, and payroll data."
  },
  {
    id: 7,
    title: "E-Commerce Back End",
    image: Backend,
    github: "https://github.com/TuaTuivai/ORM",
    description: "An Object-Relational Mapping architectural backend optimizing database operations, secure data entry, and robust inventory logging tracking."
  }
];

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1 className="portfolio-title">My Portfolio</h1>
      <div className="projects">
        {projects.map((project) => (
          <div key={project.id} className="project" style={{ padding: '20px', marginBottom: '20px', borderRadius: '8px', border: '1px solid #ddd' }}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title" style={{ marginTop: '10px' }}>{project.title}</h3>
            <p className="project-description" style={{ fontSize: '0.95rem', color: '#666', margin: '10px 0' }}>{project.description}</p>
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
