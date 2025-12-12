import React from 'react';
import './Projects.css'
import rasm1 from './assets/2025-11-09_14-33-31.png'
import rasm2 from './assets/2025-11-09_14-49-31.png'
import rasm3 from './assets/mini sayt.png'
import rasm4 from './assets/2025-06-10_21-22-12.png'
import rasm5 from './assets/2025-06-10_22-38-38.png'

const Projects = ({ isDarkMode, t }) => {
    return (
        <div className={`background-projects ${isDarkMode ? 'dark' : ''}`}>
            <section id="Portfolio" className="section">
                <div className="background-project">
                    <div className="max-width">
                        <div className='project' id='Projects'>
                            <br />
                            <h1 className='h1-Projects'>{t('My Projects')}</h1>
                            <br />
                            <br />
                            <div className="div-project-max-1">
                                <div className="project-1">
                                    <img src={rasm1} alt="sayt" /><br />
                                    <br />
                                    <ul>
                                        <li>React</li>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                    </ul>
                                    <a href="https://github.com/Mukhamadaliev/project.git"><i className=' i font-size-25 bx bxl-github'></i></a>
                                    <a href="https://project-psi-rose-65.vercel.app/"><i className=' i font-size-25 bx bx-link-external'></i></a>
                                </div>
                                <div className="project-2">
                                    <img src={rasm2} alt="belissimo" /><br />
                                    <br />
                                    <ul>
                                        <li>React</li>
                                        <li>Css</li>
                                        <li>JavaScript</li> 
                                    </ul>
                                    <a href="https://github.com/Mukhamadaliev/Web-Sayt.git"><i className=' i font-size-25 bx bxl-github'></i></a>
                                    <a href="https://web-sayt-five.vercel.app/"><i className=' i font-size-25 bx bx-link-external'></i></a>
                                </div>
                                <div className="project-3">
                                    <img src={rasm3} alt="mini sayt" /><br />
                                    <br />
                                    <ul>
                                        <li>Html</li>
                                        <li>Css</li>
                                        <li>JavaScript</li>
                                    </ul>
                                    <a href="https://github.com/Mukhamadaliev/mini-sayt-web.git"><i className=' i font-size-25 bx bxl-github'></i></a>
                                    <a href="https://mini-sayt-web.vercel.app/"><i className=' i font-size-25 bx bx-link-external'></i></a>
                                </div>
                            </div>
                            <br />
                            <div className="div-project-max-1">
                                <div className="project-1 project-4">
                                    <img src={rasm4} alt="sayt" /><br />
                                    <br />
                                    <ul>
                                        <li>Html</li>
                                        <li>Css</li>
                                        <li>JavaScript</li>
                                    </ul>
                                    <a href="https://github.com/Mukhamadaliev/Portfolio.git"><i className=' i font-size-25 bx bxl-github'></i></a>
                                    <a href="https://portfolio-swart-pi-84.vercel.app/"><i className=' i font-size-25 bx bx-link-external'></i></a>
                                </div>
                                <div className="project-2  project-5">
                                    <img src={rasm5} alt="belissimo" /><br />
                                    <br />
                                    <ul>
                                        <li>Html</li>
                                        <li>Css</li>
                                        <li>JavaScript</li>
                                    </ul>
                                    <a href="https://github.com/Mukhamadaliev/Protfolio.git"><i className=' i font-size-25 bx bxl-github'></i></a>
                                    <a href="https://protfolio-lake-iota.vercel.app/"><i className=' i font-size-25 bx bx-link-external'></i></a>
                                </div>
                                <div className="project-3">
                                    <img src={rasm3} alt="mini sayt" /><br />
                                    <br />
                                    <ul>
                                        <li>Html</li>
                                        <li>Css</li>
                                        <li>JavaScript</li>
                                    </ul>
                                    <a href="https://github.com/Mukhamadaliev/mini-sayt-web.git"><i className=' i font-size-25 bx bxl-github'></i></a>
                                    <a href="https://mini-sayt-web.vercel.app/"><i className=' i font-size-25 bx bx-link-external'></i></a>
                                </div>
                            </div>
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects;