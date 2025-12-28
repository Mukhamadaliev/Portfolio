// import { Routes, Route } from 'react-router-dom';
// import { useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import './App.css';
// import './i18n';
// import Sagbar from './components/Sagbar/Sagbar';
// import Home from './components/Home/Home';
// import About from './components/About/About';
// import Skills from './components/Skills/Skills';
// import Projects from './components/Projects/Projects';
// import Contact from './components/Contact/Contact';
// import NoteFound from './components/notefound/NoteFound';
// import ThemeToggle from './components/ThemeToggle/ThemeToggle';
// import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher';

// const Layout = ({ children, isDarkMode }) => {
//   return (
//     <div className="app-container">
//       <Sagbar isDarkMode={isDarkMode} />
//       <main className="main-content">
//         <div className="router">{children}</div>
//       </main>
//     </div>
//   );
// };

// const App = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const { t } = useTranslation();

//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   return (
//     <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
//       <ThemeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
//       <LanguageSwitcher />
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <Layout isDarkMode={isDarkMode}>
//               <Home isDarkMode={isDarkMode} t={t} />
//             </Layout>
//           }
//         />
//         <Route
//           path="/about"
//           element={
//             <Layout isDarkMode={isDarkMode}>
//               <About isDarkMode={isDarkMode} t={t} />
//             </Layout>
//           }
//         />
//         <Route
//           path="/skills"
//           element={
//             <Layout isDarkMode={isDarkMode}>
//               <Skills isDarkMode={isDarkMode} t={t} />
//             </Layout>
//           }
//         />
//         <Route
//           path="/projects"
//           element={
//             <Layout isDarkMode={isDarkMode}>
//               <Projects isDarkMode={isDarkMode} t={t} />
//             </Layout>
//           }
//         />
//         <Route
//           path="/contact"
//           element={
//             <Layout isDarkMode={isDarkMode}>
//               <Contact isDarkMode={isDarkMode} t={t} />
//             </Layout>
//           }
//         />

//         {/*  404 page -> No Sagbar */}
//         <Route path="*" element={<NoteFound t={t} />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;



















































import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import './i18n';
import Sagbar from './components/Sagbar/Sagbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import NoteFound from './components/notefound/NoteFound';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher';

const Layout = ({ children, isDarkMode }) => {
  return (
    <div className="app-container">
      <Sagbar isDarkMode={isDarkMode} />
      <main className="main-content">
        <div className="router">{children}</div>
      </main>
    </div>
  );
};

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { t } = useTranslation();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <ThemeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <LanguageSwitcher />
      <Routes>
        <Route
          path="/"
          element={
            <Layout isDarkMode={isDarkMode}>
              <Home isDarkMode={isDarkMode} t={t} />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout isDarkMode={isDarkMode}>
              <About isDarkMode={isDarkMode} t={t} />
            </Layout>
          }
        />
        <Route
          path="/skills"
          element={
            <Layout isDarkMode={isDarkMode}>
              <Skills isDarkMode={isDarkMode} t={t} />
            </Layout>
          }
        />
        <Route
          path="/projects"
          element={
            <Layout isDarkMode={isDarkMode}>
              <Projects isDarkMode={isDarkMode} t={t} />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout isDarkMode={isDarkMode}>
              <Contact isDarkMode={isDarkMode} t={t} />
            </Layout>
          }
        />

        {/*  404 page -> No Sagbar */}
        <Route path="*" element={<NoteFound t={t} />} />
      </Routes>
    </div>
  );
};

export default App;