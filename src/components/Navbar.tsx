// importing pictures in to the page

import React, { useState } from 'react'
import logo from '../assets/Entreprise_image/logo-removebg-preview.png'
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext'

// creating a navbar of type React.FC
const Navbar: React.FC = () => {
  const { language, setLanguage,  } = useLanguage()

    // for responsiveness, where isOpen is the main screen bar of the desktop and setting a non-defined way the user want 
    // use the site
    const [isOpen, setisOpen] = useState(false); // isOpen is the visual coder sreen and setisOpen is unknown(user's screen)
    const ToggleMenu = ()  => setisOpen(!isOpen);
    // ToggleMenu is the function call to change whan ever the is an onclick and resize the site
    const { t } = useLanguage()

    return (
        <>
        <header className='bg-green-500 text-white fixed top-0 w-full z-50 '>
            <div className='flex items-center justify-between px-6 py-4'>
                <img className='h-12 w-auto' src={logo} alt="logo de la maison" />
                <nav className='hidden md:flex space-x-6 text-sm items-center '>
                    <div className='flex flex-col gap-2 md:flex-row md:items-center md:justify-end'>
                        <label className='font-semibold text-white'>
                            {t.home.languageLabel}
                        </label>
                        <select
                            value={language}
                            onChange={(e) => setLanguage(e.target.value as 'fr' | 'en')}
                            className='border rounded-xl px-3 py-2 text-sm text-black bg-white'
                        >
                            <option value='fr'>{t.home.languageFr}</option>
                            <option value='en'>{t.home.languageEn}</option>
                        </select>
                    </div>
                    <Link to={`/home`} className='hover:bg-green-700 rounded-lg hover:scale-110 transition duration-300 '>{t.nav.home}</Link>
                    <Link to={`/nosproduit`} className='hover:bg-green-700 rounded-lg hover:scale-110 transition duration-300'>{t.nav.nosProduits}</Link>
                    <Link to={`/apropos`} className='hover:bg-green-700 rounded-lg hover:scale-110 transition duration-300'>{t.nav.apropos}</Link>
                    <Link to={`/contact`} className='hover:bg-green-700 rounded-lg hover:scale-110 transition duration-300'>{t.nav.contact}</Link>
                    <Link to={`/connexion`} className='hover:bg-green-700 rounded-lg bg-gray-600'><FaUserCircle  /></Link>

                </nav>

                {/* buttom to show the menu bar when ever the screen is not medium i.e large */}
                {/* when the the condition says that when it is in full screen,(it is not isOpen), Fatime is called to display nothing
                 and whenever the screen size changes, FaBars is called(isOpen)  */}
                <button onClick={ToggleMenu} className='md:hidden text-2xl '>{isOpen ? <FaTimes /> : <FaBars />} </button>
            </div>

            {/*  isOpen is used display the content of the menu in block  when the size is mall */}
            {isOpen && (
                <nav className=' md:hidden bg-green-600 text-sm px-6 pb-4 pt-2 space-y-3'>
                    <Link to={`/home`} className='block'>{t.nav.home}</Link>
                    <Link to={`/nosproduit`} className='block'>{t.nav.nosProduits}</Link>
                    <Link to={`/apropos`} className='block'>{t.nav.apropos}</Link>
                    <Link to={`/contact`} className='block'>{t.nav.contact}</Link>
                    <Link to={`/connexion`} className='block'>{t.nav.connexion}</Link>
                </nav>
            )}
        </header>
        </>
    )
}

export default Navbar;