import { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [description, setDescription] = useState('text');

  const handleMouseEnter = () => {
    setDescription('Novo texto ao passar o mouse!');
  };

  const handleMouseLeave = () => {
    setDescription('<i class="fa-brands fa-python project-tech project-py"></i>'); // Texto original com HTML
  };

  return (
    <section id='projects' className='sectionMain'>
      <h2 className='titleSection'>PROJECTS</h2>
      <div id='carousel' className='carousel slide'>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <div
              className='carousel-schema-primary'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className='carousel-image'>
                <a
                  href='https://coinviewer-diogooike.streamlit.app/'
                  className='carousel-image-project image-project1'
                  target='_blank'
                  rel='noopener noreferrer'
                  alt='Project image'
                ></a>
              </div>
              <div className='carousel-desc'>
                <h4>Coin Viewer</h4>
                <p dangerouslySetInnerHTML={{ __html: description }} /> {/* Aqui */}
              </div>
            </div>
            <div className='carousel-schema-primary'>
              <div className='carousel-desc'>
                <h4>Project Name</h4>
                <p>text</p>
              </div>
              <div className='carousel-image'>
                <a className='carousel-image-project' href=''></a>
              </div>
            </div>
          </div>
          <div className='carousel-item'></div>
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carousel'
          data-bs-slide='prev'
        >
          <span className='carousel-control-prev-icon' aria-hidden='true'></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carousel'
          data-bs-slide='next'
        >
          <span className='carousel-control-next-icon' aria-hidden='true'></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </section>
  );
};

export default Projects;
