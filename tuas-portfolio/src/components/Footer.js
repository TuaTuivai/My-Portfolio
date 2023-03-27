import React from 'react';
import '../styles/Footer.css';
import GithubLogo from '../styles/Images/githubLogo.png';
import stackoverflowLogo from '../styles/Images/stackOverflowLogo.png';
import linkedinLogo from '../styles/Images/linkedInLogo.png';
import '../styles/fonts.css';

export default function Footer() {
  return (
    <div className="footer">
      <a href="https://stackoverflow.com/users/21499336/tua-tuivai">
        <img src={stackoverflowLogo} alt="stackOverflow" />
        <span>Stack overFlow</span>
      </a>
      <a href="https://github.com/TuaTuivai">
        <img src={GithubLogo} alt="Github" />
        <span>Github</span>
      </a>
      <a href="https://www.linkedin.com/in/tua-tuivai-0184b4216/">
        <img src={linkedinLogo} alt="LinkedIn" />
        <span>LinkedIn</span>
      </a>
    </div>
  );
}
