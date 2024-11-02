import React from 'react'
import './Header.css'

const Header = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className='header' id='menu'>
      <nav className='navbar navbar-expand-lg navbar-dark'>
        Welcome!
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <button
                className='nav-link'
                onClick={() => scrollToSection('projects')}
              >
                Projects
              </button>
            </li>
            <li className='nav-item'>
              <button
                className='nav-link'
                onClick={() => scrollToSection('EB')}
              >
                Academic
              </button>
            </li>
            <li className='nav-item'>
              <button
                className='nav-link'
                onClick={() => scrollToSection('skills')}
              >
                Skills
              </button>
            </li>
            <li className='nav-item'>
              <button
                className='nav-link'
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <div className='my-info'>
        <div className='my-role'>
          <h1>&lt;Diogo Oike/&gt;</h1>
          <div className='my-functions'>
            <h3>DATA ENGINEER</h3>
            <h3>FULLSTACK DEVELOPER</h3>
          </div>
        </div>
        <div className='about-me'>
          <h2>About me</h2>
          <p className='about-text'>
            Nice to meet you, I'm Diogo! I'm a university student focused on
            software development and data engineering, with my knowledge in{' '}
            <span className='styleTech stylePY'>Python</span>,{' '}
            <span className='styleTech styleJV'>Java</span>, and{' '}
            <span className='styleTech styleJS'>JavaScript</span>. I enjoy
            creating smart solutions while exploring the world of technology. I
            am a committed and creative person, always looking to{' '}
            <span className='styleEnph'>learn</span>{' '}
            something new.
          </p>
        </div>
      </div>
      <button
        className='fixed-button'
        onClick={() => scrollToSection('menu')}
        title='Back to menu'
      >
        <i className='fa-solid fa-arrow-up'></i>
      </button>
    </header>
  )
}

export default Header
