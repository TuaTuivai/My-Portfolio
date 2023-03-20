import React from 'react';
import '../styles/Header.css'
function Header({ currentPage, handlePageChange }) {
  return (
  

 
    <header className='header'>
      <nav>
        <ul>
          <li>
            <a
              href="#about"
              onClick={() => handlePageChange('About')}
              className={currentPage === 'about' ? 'nav-link active' : 'nav-link'}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              onClick={() => handlePageChange('Portfolio')}
              className={currentPage === 'portfolio' ? 'nav-link active' : 'nav-link'}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#resume"
              onClick={() => handlePageChange('Resume')}
              className={currentPage === 'resume' ? 'nav-link active' : 'nav-link'}
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
