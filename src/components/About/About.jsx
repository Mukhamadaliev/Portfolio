import React from 'react';
import './about.css';
import img2 from './img/image.png'
import { MdDownload } from "react-icons/md";

const About = ({ isDarkMode, t }) => {
  return (
    <div className={`background-about ${isDarkMode ? 'dark' : ''}`}>
      <div className="max-width">
        <section id="about" className="section" data-aos="fade-up-left">
          <div className="about">
            <div className="about-left">
              <img src={img2} alt="Ibrohim" />
            </div>
            <div className="about-right">
              <h1>{t('About Me')}</h1>
              <p>{t('aboutText1')}</p>
              <br />
              <p>{t('aboutText2')}</p>
              <div className="cards-container">
                <div className="card">
                  <div className="card-number">+1</div>
                  <div className="card-text">
                    <span>{t('Years of')}</span>
                    <span>{t('Experience')}</span>
                  </div>
                </div>

                <div className="card">
                  <div className="card-number">+16</div>
                  <div className="card-text">
                    <span>{t('Happy')}</span>
                    <span>{t('Customers')}</span>
                  </div>
                </div>

                <div className="card">
                  <div className="card-number">+2</div>
                  <div className="card-text">
                    <span>{t('Completed')}</span>
                    <span>{t('Projects')}</span>
                  </div>
                </div>

                <div className="card">
                  <div className="card-number">+10</div>
                  <div className="card-text">
                    <span>{t('Total')}</span>
                    <span>{t('school')}</span>
                  </div>
                </div>
              </div>
              <div className="home-buttons">
                <a
                  href="/CV.docx"
                  download="CV.docx"
                  className="btn-download"
                >
                  {t('Download CV')} <MdDownload />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;