import React, { useState } from "react";
import "./Skills.css";

import { FaHtml5, FaCss3Alt, FaReact, FaJs } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { RiBootstrapLine } from "react-icons/ri";
import { PiFigmaLogoDuotone } from "react-icons/pi";

import { FaComments, FaUsers, FaLightbulb, FaClock, FaBrain, FaPuzzlePiece } from "react-icons/fa";

const Skills = ({ isDarkMode = false, t }) => {
  const hardSkills = [
    { name: "HTML5", icon: <FaHtml5 />, level: 95, color: "#e44d26" },
    { name: "CSS", icon: <FaCss3Alt />, level: 90, color: "#264de4" },
    { name: "Bootstrap", icon: <RiBootstrapLine />, level: 80, color: "#563d7c" },
    { name: "SCSS", icon: <FaSass />, level: 85, color: "#cc6699" },
    { name: "JavaScript", icon: <FaJs />, level: 85, color: "#f0db4f" },
    { name: "React", icon: <FaReact />, level: 90, color: "#61dbfb" },
    { name: "Figma", icon: <PiFigmaLogoDuotone />, level: 75, color: "#f24e1e" }
  ];

  const softSkills = [
    { name: t("Communication"), icon: <FaComments />, level: 90 },
    { name: t("Teamwork"), icon: <FaUsers />, level: 85 },
    { name: t("Creativity"), icon: <FaLightbulb />, level: 80 },
    { name: t("Time Management"), icon: <FaClock />, level: 85 },
    { name: t("Problem Solving"), icon: <FaPuzzlePiece />, level: 80 },
    { name: t("Critical Thinking"), icon: <FaBrain />, level: 75 }
  ];

  const [activeTab, setActiveTab] = useState("hard");
  const [activeIndex, setActiveIndex] = useState(null);

  const currentSkills = activeTab === "hard" ? hardSkills : softSkills;

  return (
    <section id="skills" className={`skills-section ${isDarkMode ? "dark" : ""}`}>
      <div className="container">
        <h2 className="section-title">{t("My Skills")}</h2>

        <div className="types-of-skills">
          <h3
            className={activeTab === "hard" ? "tab active-tab" : "tab"}
            onClick={() => { setActiveTab("hard"); setActiveIndex(null); }}
          >
            {t("Hard Skills")}
          </h3>
          <h3
            className={activeTab === "soft" ? "tab active-tab" : "tab"}
            onClick={() => { setActiveTab("soft"); setActiveIndex(null); }}
          >
            {t("Soft Skills")}
          </h3>
        </div>

        <div className="skills-grid">
          {currentSkills.map((skill, index) => (
            <div
              key={index}
              className={`skill-card ${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              {skill.icon && <div className="skill-icon" style={skill.color ? { color: skill.color } : {}}>{skill.icon}</div>}
              <h4 className="skill-name">{skill.name}</h4>

              <div className="progress-bar" aria-hidden>
                <div
                  className="progress"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <span className="skill-level">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;