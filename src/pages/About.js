import React from 'react';
import profilePicture from '../styles/Images/PlaceHolderForPortfolio.jpg';
import backgroundImage from '../styles/Images/Northern-Lights.png';
import '../styles/About.css';

export default function About() {
  return (
    <div className="about-container" style={{backgroundImage: `url(${backgroundImage})`, backgroundPosition: 'center bottom'}}>
      <div className="profile-picture-container">
        <img src={profilePicture} alt="Profile" />
      </div>
      <div className="about-content">
        <h1 style={{fontSize: '3rem', fontWeight: 'bold'}}>About Me</h1>
        <p style={{fontSize: '1.2rem', lineHeight: '1.6'}}>
          My name is Tua Tuivai, and I am an operations professional and tech-savvy specialist. By combining my background in team management and facility operations with technical training from the UCLA Extension Full-Stack Web Development Bootcamp, I bring a unique, analytical edge to digital workspaces.
          <br /><br />
          I excel at maintaining data integrity, optimizing workflows, and mastering complex digital tools rapidly. I thrive in collaborative environments that require strong critical thinking and strict attention to detail.
        </p>
      </div>
    </div>
  );
}
