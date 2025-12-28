
import React from 'react';
import './Projects.css';
import rasm1 from './assets/2025-11-09_14-33-31.png';
import rasm2 from './assets/2025-11-09_14-49-31.png';
import rasm3 from './assets/rasm-3.png';
import rasm4 from './assets/2025-12-28_23-12-57.png';
import rasm5 from './assets/2025-12-19_22-26-53.png';
import rasm6 from './assets/2025-12-19_22-41-01.png';

const Projects = ({ isDarkMode, t }) => {
    // Proyektlar ro'yxati
    const projectsList = [
        { id: 1, img: rasm1, tech: ['React', 'CSS'], github: 'https://github.com/Mukhamadaliev/project.git', link: 'https://project-psi-rose-65.vercel.app/' },
        { id: 2, img: rasm2, tech: ['React', 'CSS'], github: 'https://github.com/Mukhamadaliev/Web-Sayt.git', link: 'https://web-sayt-five.vercel.app/' },
        { id: 3, img: rasm3, tech: ['React', 'CSS'], github: 'https://github.com/Mukhamadaliev/ServiceHub.git', link: 'https://service-hub-ivory.vercel.app/' },
        { id: 4, img: rasm4, tech: ['React', 'styled-components'], github: 'https://github.com/Sayyorbek2005/platform.git', link: 'https://platform-ashy-three.vercel.app/' },
        { id: 5, img: rasm5, tech: ['React', 'CSS'], github: 'https://github.com/Mukhamadaliev/MyApp.git', link: 'https://my-app-chi-eight-20.vercel.app/' },
        { id: 6, img: rasm6, tech: ['React', 'CSS'], github: 'https://github.com/Mukhamadaliev/TechFlow.git', link: 'https://tech-flow-zeta.vercel.app/' },
    ];

    return (
        <div className={`background-projects ${isDarkMode ? 'dark' : ''}`}>
            <section id="Portfolio" className="section">
                <div className="max-width">
                    <h1 className='h1-Projects'>{t('My Projects')}</h1>
                    
                    <div className="projects-grid">
                        {projectsList.map((project, index) => (
                            <div key={project.id} className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="img-container">
                                    <img src={project.img} alt="project-thumbnail" />
                                </div>
                                <div className="project-info">
                                    <ul className="tech-stack">
                                        {project.tech.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                    <div className="project-links">
                                        <a href={project.github} target="_blank" rel="noreferrer">
                                            <i className='bx bxl-github font-size-25'></i>
                                        </a>
                                        <a href={project.link} target="_blank" rel="noreferrer">
                                            <i className='bx bx-link-external font-size-25'></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;