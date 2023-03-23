import React from 'react';
import '../styles/Footer.css';
import GithubLogo from '../styles/Images/icons8-github-64.png';
import twitterLogo from '../styles/Images/icons8-twitter-50.png';
import linkedinLogo from '../styles/Images/linkedin.png';
import '../styles/fonts.css';

export default function Footer() {
  return (
    <div className="footer">
      <a href="https://www.facebook.com">
        <img src={GithubLogo} alt="Github" />
        <span>Facebook</span>
      </a>
      <a href="https://www.twitter.com">
        <img src={twitterLogo} alt="Twitter" />
        <span>Twitter</span>
      </a>
      <a href="https://www.linkedin.com">
        <img src={linkedinLogo} alt="LinkedIn" />
        <span>LinkedIn</span>
      </a>
    </div>
  );
}
