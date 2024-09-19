import React, { useState } from 'react'
import './EdBackground.css'

const Skills = () => {
  const [activeSection, setActiveSection] = useState('EBCertifies')

  const handleMouseEnter = (mouseIn) => {
    setActiveSection(mouseIn)
  }

  return (
    <section id='EB' className='sectionMain'>
      <h2 className='titleSection'>ACADEMIC BACKGROUND</h2>
      <div className='EBContent'>
        <div className='EBOptions'>
          <div
            className={`EBCertifies ${
              activeSection === 'EBCertifies' ? 'EBActive' : 'EBOff'
            }`}
            onMouseEnter={() => handleMouseEnter('EBCertifies')}
          >
            <h3>Courses/certificates</h3>
          </div>
          <div
            className={`EBAcademic ${
              activeSection === 'EBAcademic' ? 'EBActive' : 'EBOff'
            }`}
            onMouseEnter={() => handleMouseEnter('EBAcademic')}
          >
            <h3>Academic</h3>
          </div>
        </div>
        <div className='EBCols'>
          <div
            className={`EBCertifiesCol ${
              activeSection === 'EBCertifies' ? 'EBColActive' : 'EBColOff'
            }`}
            onMouseEnter={() => handleMouseEnter('EBCertifies')}
          >
            <div className='EBCertifiesText'>
              <ul className='EBCertifiesList'>
                <li>DIO: Amazon web services</li>
                <li>DIO: Potência Tech Data Science</li>
                <li>Coursera: Google Data Analytics</li>
                <li>Udemy: Python Bootcamp</li>
                <li>Udemy: Fullstack web Bootcamp</li>
                <li>Cubos Academy: Data Analysis</li>
              </ul>
            </div>
          </div>
          <div
            className={`EBAcademicCol ${
              activeSection === 'EBAcademic' ? 'EBColActive' : 'EBColOff'
            }`}
            onMouseEnter={() => handleMouseEnter('EBAcademic')}
          >
            <p className='textDescription'>
              Information Technology Management (GTI) student at IFSC in
              Florianópolis. In the programming part, I carried out programming
              logic using the language{' '}
              <span className='styleTech styleCPP'>C++</span> and object
              orientation using <span className='styleTech styleJV'>Java</span>.
              Furthermore, I learned about network and management basics. This
              in disciplines such as: Network infrastructure, systems
              development processes, people management and economic and
              financial management.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
