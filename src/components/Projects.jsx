import './Projects.css'

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
        </a>
        . It is primarily built with{' '}
        <span className='styleTech stylePY'>PYTHON</span>, using{' '}
        <span className='styleTool'>STREAMLIT</span> for the interface,{' '}
        <span className='styleTool'>PANDAS</span> and{' '}
        <span className='styleTool'>NUMPY</span> for data handling,{' '}
        <span className='styleTool'>REQUESTS</span> for the API, and{' '}
        <span className='styleTool'>PLOTLY</span> for the charts.
      </>
    ),
    imageUrl: 'images/Tindog.png',
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
        </a>
        . In this project, I used{' '}
        <span className='styleTech styleJS'>JAVASCRIPT</span> along with{' '}
        <span className='styleTech styleReact'>REACT</span> and styled
        it with <span className='styleTech styleCSS'>CSS</span>.
      </>
    ),
    imageUrl: 'https://dnaka27.github.io/ToDoList_basic/',
    githubRepository: 'https://github.com/Dnaka27/ToDoList_basic/',
  },
  // Outros projetos podem ser adicionados aqui.
]

// Componente para exibir um projeto individual
const ProjectItem = ({ project, index }) => (
  <div className='schema-primary'>
    <div className={`image-primary ${index === 0 ? 'image-project1' : 'image-project2'}`}>
      <a
        href={project.imageUrl}
        className='image-project'
        target='_blank'
        rel='noopener noreferrer'
        aria-label={`${project.name} Project`}
      >
        {/* A tag <img> não é mais necessária, pois estamos usando o background */}
      </a>
    </div>
    <div className='carousel-desc-primary'>
      <h4 className='carousel-desc-title'>{project.name}</h4>
      <p className='carousel-desc-text'>{project.description}</p>
      <div className='carousel-desc-primary-links'>
        <a
          href={project.githubRepository}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='GitHub Repository'
        >
          <i className='fa-brands fa-github carousel-desc-links-icon'></i>
        </a>
      </div>
    </div>
  </div>
);



// Componente principal para o carrossel de projetos
const Projects = () => {
  // Agrupa projetos em pares
  const projectPairs = [];
  for (let i = 0; i < projectData.length; i += 2) {
    projectPairs.push(projectData.slice(i, i + 2));
  }

  return (
    <section id='projects' className='sectionMain'>
      <h2 className='titleSection'>PROJECTS</h2>
      <div id='carousel' className='carousel slide'>
        <div className='carousel-inner'>
          {projectPairs.map((pair, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <div className='project-pair'>
                {pair.map((project, idx) => (
                  <ProjectItem key={idx} project={project} index={idx} />
                ))}
              </div>
            </div>
          ))}
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

export default Projects
