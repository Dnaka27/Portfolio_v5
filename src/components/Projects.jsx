import './Projects.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Dados dos projetos
const projectData = [
  {
    name: 'Coin Viewer',
    description: 'A currency quotation application built with Python and Streamlit.',
    imageUrl: 'images/Coin_Viewer.png',
    githubRepository: 'https://github.com/Dnaka27/Coin_Viewer',
  },
  {
    name: 'To Do List',
    description: 'An organizational to-do list application using React and JavaScript.',
    imageUrl: 'images/To_Do_List.png',
    githubRepository: 'https://github.com/Dnaka27/ToDoList_basic/',
  },
  // Adicione mais projetos aqui
];

// Componente para exibir um projeto individual
const ProjectCard = ({ project }) => (
  <div className="project-card">
    <div
      className="project-image"
      style={{ backgroundImage: `url(${project.imageUrl})` }}
    ></div>
    <div className="project-info">
      <h4 className="project-title">{project.name}</h4>
      <p className="project-description">{project.description}</p>
      <a href={project.githubRepository} target="_blank" rel="noopener noreferrer" className="project-link">
        <i className="fa-brands fa-square-github"></i>
      </a>
    </div>
  </div>
);

// Componente principal de projetos
const Projects = () => (
  <section id="projects" className="sectionMain">
    <h2 className="titleSection">PROJECTS</h2>
    <div className="project-container">
      {projectData.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  </section>
);

export default Projects;
