import './Projects.css'

const Projects = () => {
  return (
    <section id='projects' class='sectionMain'>
      <h2 class='titleSection'>PROJECTS</h2>
      <div id='carousel' class='carousel slide'>
        <div class='carousel-inner'>
          <div class='carousel-item'>
            <div class='carouselProjects'>
              <div class='carouselImageCol'>
                <a
                  class='carouselProjectImage projectImage1'
                  href='https://dnaka27.github.io/Tindog_Udemy_Web/'
                  target='_blank'
                  alt='Project image'
                ></a>
              </div>
              <div class='carouselDescriptionCol'>
                <h3 class='titleProjectDescription'>TinDoG</h3>
                <p class='textDescription'>
                  This project was completed as part of the Fullstack
                  Programming course on Udemy. It’s a dating app for dogs called{' '}
                  <a
                    class='projectName'
                    href='https://github.com/Dnaka27/Tindog_Udemy_Web'
                    target='_blank'
                  >
                    TINDOG
                  </a>
                  . I used <span class='styleTech styleHTML'>HTML</span> and{' '}
                  <span class='styleTech styleCSS'>CSS</span> to create a static
                  page layout, also utilizing{' '}
                  <span class='styleTool'>BOOTSTRAP</span> for responsiveness
                  and components.
                </p>
              </div>
            </div>
          </div>
          <div class='carousel-item'>
            <div class='carouselProjects'>
              <div class='carouselImageCol'>
                <a
                  class='carouselProjectImage projectImage2'
                  href='https://dnaka27.github.io/ToDoList_basic/'
                  target='_blank'
                  alt='Project image'
                ></a>
              </div>
              <div class='carouselDescriptionCol'>
                <h3 class='titleProjectDescription'>To do list</h3>
                <p class='textDescription'>
                  This is an organizational project, a simple to-do list for
                  everyday tasks, but with filters and a search bar. It's called{' '}
                  <a
                    class='projectName'
                    href='https://github.com/Dnaka27/ToDoList_basic/'
                    target='_blank'
                  >
                    TO DO LIST
                  </a>
                  . In this project, I used{' '}
                  <span class='styleTech styleJS'>JAVASCRIPT</span> along with{' '}
                  <span class='styleTech styleReact'>REACT</span> and finally
                  styled it with <span class='styleTech styleCSS'>CSS</span>.
                </p>
              </div>
            </div>
          </div>
          <div class='carousel-item active'>
            <div class='carouselProjects'>
              <div class='carouselImageCol'>
                {/* Adicionar domínio */}
                <a
                  class='carouselProjectImage projectImage3'
                  href='https://coinviewer-diogooike.streamlit.app/'
                  target='_blank'
                  alt='Project image'
                ></a>
              </div>
              <div class='carouselDescriptionCol'>
                <h3 class='titleProjectDescription'>Coin Viewer</h3>
                <p class='textDescription'>
                  This is a personal project that is still in progress, a
                  currency quotation application called{' '}
                  <a
                    class='projectName'
                    href='https://github.com/Dnaka27/Coin_Viewer'
                    target='_blank'
                  >
                    COIN VIEWER
                  </a>
                  . It is primarily built with{' '}
                  <span class='styleTech stylePY'>PYTHON</span>, using{' '}
                  <span class='styleTool'>STREAMLIT</span> for the interface,{' '}
                  <span class='styleTool'>PANDAS</span> and{' '}
                  <span class='styleTool'>NUMPY</span> for data handling,{' '}
                  <span class='styleTool'>REQUESTS</span> for the API, and{' '}
                  <span class='styleTool'>PLOTLY</span> for the charts.
                </p>
              </div>
            </div>
          </div>
          <div class='carousel-item'>
            <div class='carouselProjects'>
              <div class='carouselImageCol'>
                <a
                  class='carouselProjectImage projectImage4'
                  href='https://github.com/Dnaka27/Basic_system_JavaSpring'
                  target='_blank'
                  alt='Project image'
                ></a>
              </div>
              <div class='carouselDescriptionCol'>
                <h3 class='titleProjectDescription'>Java API</h3>
                <p class='textDescription'>
                  This is a basic project made with{' '}
                  <span class='styleTech styleJV'>Java</span>, called{' '}
                  <a
                    href='https://github.com/Dnaka27/Basic_system_JavaSpring'
                    class='projectName'
                  >
                    JAVA API
                  </a>
                  . It’s a simple system integrated with an H2 database. I used
                  the <span class='styleTool'>SPRING</span> framework and{' '}
                  <span class='styleTool'>MAVEN</span> to manage its
                  dependencies.
                </p>
              </div>
            </div>
          </div>
          <div class='carousel-item'>
            <div class='carouselProjects'>
              <div class='carouselImageCol'>
                <a
                  class='carouselProjectImage projectImage5'
                  href='https://github.com/Dnaka27/Nutritionix_API-Google_sheets'
                  target='_blank'
                  alt='Project image'
                ></a>
              </div>
              <div class='carouselDescriptionCol'>
                <h3 class='titleProjectDescription'>Nutritionix project</h3>
                <p class='textDescription'>
                  A project completed as part of the Python programming course
                  on Udemy, called{' '}
                  <a
                    class='projectName'
                    href='https://github.com/Dnaka27/Nutritionix_API-Google_sheets'
                    target='_blank'
                  >
                    NUTRITIONIX
                  </a>
                  . It involves integrating a{' '}
                  <span class='styleTool'>SHEETS</span> spreadsheet with an API
                  call using <span class='styleTech stylePY'>PYTHON</span> and
                  the <span class='styleTool'>SHEETY</span> tool.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          class='carousel-control-prev'
          type='button'
          data-bs-target='#carousel'
          data-bs-slide='prev'
        >
          <span class='carousel-control-prev-icon' aria-hidden='true'></span>
          <span class='visually-hidden'>Previous</span>
        </button>
        <button
          class='carousel-control-next'
          type='button'
          data-bs-target='#carousel'
          data-bs-slide='next'
        >
          <span class='carousel-control-next-icon' aria-hidden='true'></span>
          <span class='visually-hidden'>Next</span>
        </button>
      </div>
    </section>
  )
}

export default Projects
