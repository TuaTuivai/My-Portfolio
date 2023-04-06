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
  },
  {
    id: 2,
    title: "Recipes",
    image: OnlyRecipes,
    github: "https://only-recipes-app.herokuapp.com/",
  },
  {
    id: 3,
    title: "What2Game",
    image: What2Game,
    github: "https://github.com/erickjavalos/what2game",
  },
  {
    id: 4,
    title: "Weather Forecast",
    image: WeatherForecast,
    github: "https://tuatuivai.github.io/Cloudy-With-A-Chance-Of-Meatballs/",
  },
  {
    id: 5,
    title: "Scheduler",
    image: Scheduler,
    github: "https://tuatuivai.github.io/WorkHardPlayHarder-Schedule/",
  },
  {
    id: 6,
    title: "Employee Tracker",
    image: EmployeeTracker,
    github: "https://github.com/TuaTuivai/EmployeeOfTheMonth",
  },
  {
    id: 7,
    title: "E-Commerce Back End",
    image: Backend,
    github: "https://github.com/TuaTuivai/ORM",
  },
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
            <a href={project.github} className="project-link" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
