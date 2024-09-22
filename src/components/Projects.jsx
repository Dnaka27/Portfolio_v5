import { useState } from 'react'
import PropTypes from 'prop-types' // Se você quiser adicionar validação de props
import './Projects.css'

const projectData = [
  {
    name: 'Coin Viewer',
    description: 
      `A currency quotation application called 
      <a class='projectName' href='https://github.com/Dnaka27/Coin_Viewer' target='_blank'>COIN VIEWER</a>. 
      It is primarily built with <span class='styleTech stylePY'>PYTHON</span>, using 
      <span class='styleTool'>STREAMLIT</span> for the interface, 
      <span class='styleTool'>PANDAS</span> and <span class='styleTool'>NUMPY</span> for data handling, 
      <span class='styleTool'>REQUESTS</span> for the API, and 
      <span class='styleTool'>PLOTLY</span> for the charts.`,
    imageUrl: 'https://coinviewer-diogooike.streamlit.app/',
    githubRepository: 'https://github.com/Dnaka27/Coin_Viewer',
  },
  {
    name: 'To Do List',
    description: 
      `This is an organizational project, a simple to-do list for
      everyday tasks. It's called 
      <a class='projectName' href='https://github.com/Dnaka27/ToDoList_basic/' target='_blank'> TO DO LIST </a>.
      In this project, I used
      <span class='styleTech styleJS'>JAVASCRIPT</span> along with
      <span class='styleTech styleReact'>REACT</span> and finally
      styled it with <span class='styleTech styleCSS'>CSS</span>.`,
    imageUrl: 'https://dnaka27.github.io/ToDoList_basic/',
    githubRepository: 'https://github.com/Dnaka27/ToDoList_basic/',
  },
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
                  href={projectData[0].imageUrl} // Acessa o URL do primeiro projeto
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
                  <a
                    href={projectData[0].githubRepository} // Link para o repositório GitHub do primeiro projeto
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='GitHub Repository'
                  >
                    <i className='fa-brands fa-github carousel-desc-links-icon'></i>
                  </a>
                </div>
              </div>
            </div>
            <div className='carousel-schema-secondary'>
              <div className='carousel-desc-secondary'>
                <h4 className='carousel-desc-title'>{projectData[1].name}</h4>{' '}
                <p
                  className='carousel-desc-text'
                  dangerouslySetInnerHTML={{
                    __html: projectData[1].description,
                  }}
                />
                <div className='carousel-desc-secondary-links'>
                  <a
                    href={projectData[1].githubRepository} // Link para o repositório GitHub do segundo projeto
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='GitHub Repository'
                  >
                    <i className='fa-brands fa-github carousel-desc-links-icon'></i>
                  </a>
                </div>
              </div>
              <div className='carousel-image-secondary'>
                <a
                  href={projectData[1].imageUrl} // Acessa o URL do segundo projeto
                  className='carousel-image-project image-project2'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='To Do List Project'
                ></a>
              </div>
            </div>
          </div>
          <div className='carousel-item'>
            
          </div>
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
