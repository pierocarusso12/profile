import { useState, useEffect } from 'react';
import 'remixicon/fonts/remixicon.css';

export function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleToggleClick = () => {
      setShowMenu((prevShowMenu) => !prevShowMenu);
    };

    const handleCloseClick = () => {
      setShowMenu(false);
    };

    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');

    if (navToggle) {
      navToggle.addEventListener('click', handleToggleClick);
    }

    if (navClose) {
      navClose.addEventListener('click', handleCloseClick);
    }

    return () => {
      // Limpiar los event listeners al desmontar el componente
      if (navToggle) {
        navToggle.removeEventListener('click', handleToggleClick);
      }

      if (navClose) {
        navClose.removeEventListener('click', handleCloseClick);
      }
    };
  }, []);

  useEffect(() => {
    const themeButton = document.getElementById('theme-button');

    const darkTheme = 'dark-theme';
    const iconTheme = 'ri-sun-line';

    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
    const getCurrentIcon = () => themeButton.classList.contains(darkTheme) ? 'ri-moon-line' : 'ri-sun-line';

    const toggleTheme = () => {
      document.body.classList.toggle(darkTheme);
      themeButton.classList.toggle(iconTheme);

      localStorage.setItem('selected-theme', getCurrentTheme());
      localStorage.setItem('selected-icon', getCurrentIcon());
    };

    if (themeButton) {
      themeButton.addEventListener('click', toggleTheme);
    }

    return () => {
      if (themeButton) {
        themeButton.removeEventListener('click', toggleTheme);
      }
    };
  }, []);

  console.log("Navbar cargado");

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          <i className="ri-code-s-slash-line"></i> Piero Carusso
        </a>

        <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`} id="nav-menu">
          <ul className='nav__list'>
            <li className="nav__item">
              <a href="#inicio" className="nav__link">Inicio</a>
            </li>
            <li className="nav__item">
              <a href="#acerca" className="nav__link">Acerca de mi</a>
            </li>
            <li className="nav__item">
              <a href="#portafolio" className="nav__link">Portafolio</a>
            </li>
            <li className="nav__item">
              <a href="https://wa.link/hwe3g1" target='_blank'  rel="noopener noreferrer" className="button">Contáctame</a>
            </li>
          </ul>

          <div className="nav__close" id="nav-close">
            <i className="ri-close-line"></i>
          </div>
        </div>

        <div className="nav__actions">
          <i className="ri-moon-line change-theme" id='theme-button'></i>
          <div className="nav__toggle" id="nav-toggle">
            <i className="ri-apps-2-line"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}
