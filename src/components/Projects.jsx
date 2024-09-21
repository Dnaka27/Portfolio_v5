import { useState } from 'react'
import PropTypes from 'prop-types' // Se você quiser adicionar validação de props
import './Projects.css'

const projectData = [
  {
    name: 'Coin Viewer',
    description: `A currency quotation application called 
    <a class='projectName' href='https://github.com/Dnaka27/Coin_Viewer' target='_blank'>COIN VIEWER</a>. 
    It is primarily built with <span class='styleTech stylePY'>PYTHON</span>, using 
    <span class='styleTool'>STREAMLIT</span> for the interface, 
    <span class='styleTool'>PANDAS</span> and <span class='styleTool'>NUMPY</span> for data handling, 
    <span class='styleTool'>REQUESTS</span> for the API, and 
    <span class='styleTool'>PLOTLY</span> for the charts.`,
    imageUrl: 'https://coinviewer-diogooike.streamlit.app/',
  },
  {},
]

const Projects = () => {
  const [description, setDescription] = useState(projectData[0].description) // Acessa o primeiro item do array

  const handleMouseEnter = () => {
    // Não precisa mais mudar a descrição
  }

  const handleMouseLeave = () => {
    // Não precisa mais mudar a descrição
  }

  return (
    <section id='projects' className='sectionMain'>
      <h2 className='titleSection'>PROJECTS</h2>
      <div id='carousel' className='carousel slide'>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <div className='carousel-schema-primary'>
              <div className='carousel-image-primary'>
                <a
                  href={projectData[0].imageUrl} // Acessa o URL corretamente
                  className='carousel-image-project image-project1'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Coin Viewer Project'
                ></a>
              </div>
              <div className='carousel-desc-primary'>
                <h4 className='carousel-desc-title'>{projectData[0].name}</h4>{' '}
                <p
                  className='carousel-desc-text'
                  dangerouslySetInnerHTML={{ __html: description }}
                />
                <div className='carousel-desc-primary-links'>
                  <a href=''>
                    <i className='fa-brands fa-github carousel-desc-links-icon'></i>
                  </a>
                </div>
              </div>
            </div>
            <div className='carousel-schema-secondary'>
              <div className='carousel-desc-secondary'>
                <h4 className='carousel-desc-title'>{projectData[0].name}</h4>{' '}
                <p
                  className='carousel-desc-text'
                  dangerouslySetInnerHTML={{ __html: description }}
                />
                <div className='carousel-desc-secondary-links'>
                  <a href=''>
                    <i className='fa-brands fa-github carousel-desc-links-icon'></i>
                  </a>
                </div>
              </div>
              <div className='carousel-image-secondary'>
                <a
                  href={projectData[0].imageUrl} // Acessa o URL corretamente
                  className='carousel-image-project image-project1'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Coin Viewer Project'
                ></a>
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
          aria-label='Previous slide'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carousel'
          data-bs-slide='next'
          aria-label='Next slide'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </section>
  )
}

export default Projects
