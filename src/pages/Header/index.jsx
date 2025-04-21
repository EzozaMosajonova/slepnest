import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import i18n from '../../18n';
import Logo from "../../assets/Logo.png";
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineFavorite } from 'react-icons/md';
import { useFavoriteStore } from '../../store/uselikestore';

const Header = () => {
  const favorites = useFavoriteStore((state) => state.favorites);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setMenuOpen(false);
  };

  const linkClass = (path) =>
    `text-lg font-bold transition ${location.pathname === path ? 'text-[#875b2f]' : 'text-gray-500'}`;

  return (
    <nav className={`fixed ${scrolled ? "bg-white" : "dark:bg-white shadow-md"} top-0 left-0 right-0 z-50`}>
      <div id='home' className="max-w-[1420px] container mx-auto py-4 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <img className='w-1/3' src={Logo} alt="Logo" />
          </Link>

          {/* Desktop menu */}
          <div className="hidden text-2xl md:flex space-x-8 items-center">
            <Link to="/" className={linkClass("/")}>{t("header.home")}</Link>
            <Link to="/collection" className={linkClass("/collection")}>{t("header.collection")}</Link>
            <Link to="/about" className={linkClass("/about")}>{t("header.about")}</Link>
            <Link to="/contact" className={linkClass("/contact")}>{t("header.contact")}</Link>
            <Link to="/favorites" className="relative px-4 transition">
              <MdOutlineFavorite className='text-2xl text-red-600' />
              {favorites.length > 0 && (
                <span className="absolute -top-2 -right-1 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </Link>
          </div>

          {/* Language select */}
          <div className="md:flex md:mr-0 mr-4">
            <select
              value={i18n.language}
              onChange={(e) => changeLanguage(e.target.value)}
              className="bg-[#875b2f] text-white text-xl p-1 rounded w-[70px] focus:outline-none"
            >
              <option value="uz">UZ</option>
              <option value="ru">RU</option>
              <option value="en">EN</option>
            </select>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden pr-5 flex items-center">
            <button onClick={toggleMenu} className="text-black text-2xl">
              {menuOpen ? 'X' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`fixed top-0 right-0 w-[250px] h-full bg-white shadow-lg transition-transform transform ${menuOpen ? 'translate-x-0 z-50' : 'translate-x-full z-10'}`}
          style={{ transition: 'transform 0.3s ease-in-out' }}
        >
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} className="text-black text-2xl">X</button>
          </div>

          <div className="flex flex-col items-center space-y-4 mt-10">
            <Link to="/" onClick={() => setMenuOpen(false)} className={linkClass("/")}>{t("header.home")}</Link>
            <Link to="/collection" onClick={() => setMenuOpen(false)} className={linkClass("/collection")}>{t("header.collection")}</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)} className={linkClass("/about")}>{t("header.about")}</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)} className={linkClass("/contact")}>{t("header.contact")}</Link>
            <Link
              to="/favorites"
              onClick={() => setMenuOpen(false)}
              className="relative group bg-gradient-to-r from-[#875b2f] to-[#a8743b] text-white px-4 py-2 rounded-full hover:shadow-lg transition duration-300 ease-in-out"
            >
              <div className="flex items-center space-x-2">
                <MdOutlineFavorite className="text-xl group-hover:scale-110 transition" />
                <span className="text-sm font-semibold hidden sm:inline">{t("header.favorites") || "Favorites"}</span>
              </div>

              {favorites.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] min-w-[20px] h-[20px] px-1 rounded-full flex items-center justify-center animate-pulse shadow-md">
                  {favorites.length}
                </span>
              )}
            </Link>

          </div>
        </div>

        {/* Overlay background */}
        {menuOpen && (
          <div
            onClick={() => setMenuOpen(false)}
            className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-20"
          ></div>
        )}
      </div>
    </nav>
  );
};

export default Header;
