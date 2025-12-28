import React from 'react';
import { useNavigate } from 'react-router-dom';
import './noteFound.css';

const NoteFound = ({ t }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  };

  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <h2 className="notfound-subtitle">{t("Oops! Page Not Found")}</h2>
      <p className="notfound-text">
        {t("404message")}
      </p>
      <button className="notfound-btn" onClick={goBack}>
        ⬅ {t("Go Back Home")}
      </button>
    </div>
  );
};

export default NoteFound;