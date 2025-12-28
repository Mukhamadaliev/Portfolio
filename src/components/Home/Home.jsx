import React from 'react';
import './home.css';
import img1 from './img/image.png';
import { MdDownload } from "react-icons/md";
import { FaTelegramPlane, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const Home = ({ isDarkMode, t }) => {
    return (
        <div className={`background-home ${isDarkMode ? 'dark' : ''}`}>
            <div className="max-width">
                <section id="home" className="section">
                    <div className="home-container" data-aos="fade-up">
                        {/* Left Side */}
                        <div className="home-left">
                            <h1>{t('Hello, I am')} <b>Ibrohim</b></h1>
                            <h3>{t('Frontend Developer & UI Designer')}</h3>
                            <p>
                                {t('homeDescription')}
                            </p>

                            <div className="home-buttons">
                                <a
                                    href="/CV.docx"
                                    download="CV.docx"
                                    className="btn-download"
                                >
                                    {t('Download CV')} <MdDownload />
                                </a>
                                <div className="social-links">
                                    <a href="https://t.me/Mukhamadaliyev20" className="telegram"><FaTelegramPlane /></a>
                                    <a href="https://www.instagram.com/ibrohim_325" className="instagram"><FaInstagram /></a>
                                    <a href="https://github.com/Mukhamadaliev" target="_blank" rel="noopener noreferrer" className="github"><IoLogoGithub /></a>
                                    <a href="https://www.linkedin.com/" className="linkedin"><FaLinkedinIn /></a>
                                </div>
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="home-right">
                            <img src={img1} alt="profile" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;