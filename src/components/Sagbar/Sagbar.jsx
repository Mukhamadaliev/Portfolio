import React, { useState, useEffect } from "react";
import { MdHome, MdPerson, MdClose, MdMenu, MdEmail } from "react-icons/md";
import { FaListUl, FaCode } from "react-icons/fa";
import { RiMenu2Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import "./sagbar.css";
import imgSagbar from "./assets/image.png";


const Sagbar = ({ isDarkMode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    } else {
      setCollapsed(!collapsed);
    }
  };

  const closeSidebar = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

  const navItems = [
    { to: "/", icon: MdHome, label: t("Home") },
    { to: "/about", icon: MdPerson, label: t("About") },
    { to: "/skills", icon: FaListUl, label: t("Skills") },
    { to: "/projects", icon: FaCode, label: t("Projects") },
    { to: "/contact", icon: MdEmail, label: t("Contact") }
  ];

  return (
    <>
      <div
        className={`sagbar-container ${isMobile ? "mobile" : "desktop"} ${
          collapsed ? "collapsed" : ""
        } ${isOpen ? "open" : ""} ${isDarkMode ? "dark" : "light"}`}
      >
        <div className="sagbar-content">
          <div data-aos="fade-right">
            {/* Profile Section */}
            <div className="profile-section">
              <img 
                src={imgSagbar} 
                alt="Profile" 
                className="profile-img" 
              />
              {!collapsed && (
                <h4 className="profile-name">Ibrohim</h4>
              )}
            </div>

            {/* Navigation Menu */}
            <ul className="nav-list">
              {navItems.map((item, index) => (
                <li key={item.to}>
                  <NavLink 
                    to={item.to} 
                    onClick={closeSidebar}
                    className={({ isActive }) => isActive ? "active" : ""}
                  >
                    <item.icon className="icon" />
                    {!collapsed && <span>{item.label}</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        className={`toggle-btn ${isOpen ? "open" : ""} ${
          isDarkMode ? "dark" : "light"
        }`}
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        {isMobile ? (
          isOpen ? <MdClose /> : <MdMenu />
        ) : (
          <RiMenu2Fill />
        )}
      </button>

      {/* Mobile Overlay */}
      {isMobile && isOpen && (
        <div 
          className="sagbar-overlay" 
          onClick={closeSidebar}
        ></div>
      )}
    </>
  );
};

export default Sagbar;