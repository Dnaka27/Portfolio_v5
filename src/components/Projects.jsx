import './Projects.css';

// Dados dos projetos
const projectData = [
  {
    name: 'Coin Viewer',
    description: (
      <>
        A currency quotation application called{' '}
        <a
          className='projectName'
          href='https://github.com/Dnaka27/Coin_Viewer'
          target='_blank'
          rel='noopener noreferrer'
        >
          COIN VIEWER
        </a>. It is primarily built with{' '}
        <span className='styleTech stylePY'>PYTHON</span>, using{' '}
        <span className='styleTool'>STREAMLIT</span> for the interface,{' '}
        <span className='styleTool'>PANDAS</span> and{' '}
        <span className='styleTool'>NUMPY</span> for data handling,{' '}
        <span className='styleTool'>REQUESTS</span> for the API, and{' '}
        <span className='styleTool'>PLOTLY</span> for the charts.
      </>
    ),
    imageUrl: 'https://coinviewer-diogooike.streamlit.app/',
    githubRepository: 'https://github.com/Dnaka27/Coin_Viewer',
  },
  {
    name: 'To Do List',
    description: (
      <>
        This is an organizational project, a simple to-do list for everyday
        tasks. It's called{' '}
        <a
          className='projectName'
          href='https://github.com/Dnaka27/ToDoList_basic/'
          target='_blank'
          rel='noopener noreferrer'
        >
          TO DO LIST
        </a>. In this project, I used{' '}
        <span className='styleTech styleJS'>JAVASCRIPT</span> along with{' '}
        <span className='styleTech styleReact'>REACT</span> and finally styled it
        with <span className='styleTech styleCSS'>CSS</span>.
      </>
    ),
    imageUrl: 'https://dnaka27.github.io/ToDoList_basic/',
    githubRepository: 'https://github.com/Dnaka27/ToDoList_basic/',
  },
];

const Projects = () => {
  return (
    <section id='projects' className='sectionMain'>
      <h2 className='titleSection'>PROJECTS</h2>
      <div id='carousel' className='carousel slide'>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <div className='carousel-schema-primary'>
              <div className='carousel-image-primary'>
                <a
                  href={projectData[0].imageUrl}
                  className='carousel-image-project image-project1'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Coin Viewer Project'
                ></a>
              </div>
              <div className='carousel-desc-primary'>
                <h4 className='carousel-desc-title'>{projectData[0].name}</h4>
                <p className='carousel-desc-text'>{projectData[0].description}</p>
                <div className='carousel-desc-primary-links'>
                  <a
                    href={projectData[0].githubRepository}
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
              <div className='carousel-image-secondary'>
                <a
                  href={projectData[1].imageUrl}
                  className='carousel-image-project image-project2'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='To Do List Project'
                ></a>
              </div>
              <div className='carousel-desc-secondary'>
                <h4 className='carousel-desc-title'>{projectData[1].name}</h4>
                <p className='carousel-desc-text'>{projectData[1].description}</p>
                <div className='carousel-desc-secondary-links'>
                  <a
                    href={projectData[1].githubRepository}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='GitHub Repository'
                  >
                    <i className='fa-brands fa-github carousel-desc-links-icon'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carousel'
          data-bs-slide='prev'
          aria-label='Previous slide'
        >
          <span className='carousel-control-prev-icon' aria-hidden='true'></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carousel'
          data-bs-slide='next'
          aria-label='Next slide'
        >
          <span className='carousel-control-next-icon' aria-hidden='true'></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </section>
  );
};

export default Projects;
