import React from 'react';
import profilePicture from '../styles/Images/PlaceHolderForPortfolio.jpg';
import backgroundPicture from '../styles/Images/Northern-Lights.png';
import '../styles/About.css';

export default function About() {
  return (
    <div className="about-container" style={{backgroundImage: `url(${backgroundPicture})`, backgroundPosition: 'center bottom'}}>
      <div className="profile-picture-container">
        <img src={profilePicture} alt="Profile" />
      </div>
      <div className="about-content">
        <h1 style={{fontSize: '3rem', fontWeight: 'bold'}}>About Me</h1>
        <p style={{fontSize: '1.2rem'}}>
        My name is Tua Tuivai, and I am a Full Stack Web Developer who recently completed the UCLA Extension Full Stack Web Development Coding Bootcamp. I am passionate about creating web applications that are not only visually appealing but also user-friendly and functional.

In addition to my web development skills, I am also currently expanding my knowledge in C# and C++. I believe that continuous learning and self-improvement are key to staying relevant in this ever-evolving industry.

As a developer, I thrive in a collaborative environment and enjoy working on projects that challenge me to think creatively and critically. I am committed to delivering high-quality work and take pride in writing clean, efficient, and well-documented code.

I am excited about the opportunity to contribute my skills and experience to a dynamic team and am actively seeking new opportunities to grow as a developer.
        </p>
      </div>
    </div>
  );
}
