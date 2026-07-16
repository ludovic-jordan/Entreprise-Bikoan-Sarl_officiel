import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/Entreprise_image/logo-removebg-preview.png'
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  // Close menu on navigation
  const handleNavClick = () => setIsOpen(false)

  const navLinks = [
    { to: '/home',          label: t.nav.home },
    { to: '/nosproduit',    label: t.nav.nosProduits },
    { to: '/apropos',       label: t.nav.apropos },
    { to: '/contact',       label: t.nav.contact },
  ]

  const isActive = (path: string) =>
    location.pathname === path ? 'bg-green-700 rounded-lg px-2 py-1' : 'px-2 py-1'

  return (
    <header className="bg-green-500 text-white fixed top-0 w-full z-50 shadow-md">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Logo */}
        <Link to="/home" onClick={handleNavClick}>
          <img
            className="h-10 w-auto max-w-[150px] sm:max-w-[180px] object-contain"
            src={logo}
            alt="Bikoan logo"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-4 text-sm">
          {/* Language switcher */}
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as 'fr' | 'en')}
            className="border rounded-lg px-2 py-1.5 text-sm text-black bg-white cursor-pointer"
          >
            <option value="fr">{t.home.languageFr}</option>
            <option value="en">{t.home.languageEn}</option>
          </select>

          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`hover:bg-green-700 hover:scale-105 transition duration-200 rounded-lg px-2 py-1 font-medium ${isActive(link.to)}`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            to="/connexion"
            className="flex items-center gap-1 bg-white/20 hover:bg-green-700 rounded-lg px-3 py-1.5 transition duration-200 font-medium"
          >
            <FaUserCircle className="text-lg" />
            <span className="hidden lg:inline">{t.nav.connexion}</span>
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl p-1 rounded-lg hover:bg-green-600 transition"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="md:hidden bg-green-600 px-4 pb-5 pt-3 flex flex-col gap-3 text-sm shadow-lg">
          {/* Language switcher */}
          <div className="flex items-center gap-2">
            <label className="font-semibold text-white text-xs uppercase tracking-wide">
              {t.home.languageLabel}
            </label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as 'fr' | 'en')}
              className="border rounded-lg px-2 py-1.5 text-sm text-black bg-white flex-1"
            >
              <option value="fr">{t.home.languageFr}</option>
              <option value="en">{t.home.languageEn}</option>
            </select>
          </div>

          {/* Nav links */}
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={handleNavClick}
              className="block py-2 px-3 rounded-lg hover:bg-green-700 transition font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/connexion"
            onClick={handleNavClick}
            className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-green-700 transition font-medium"
          >
            <FaUserCircle />
            {t.nav.connexion}
          </Link>
        </nav>
      )}
    </header>
  )
}

export default Navbar
