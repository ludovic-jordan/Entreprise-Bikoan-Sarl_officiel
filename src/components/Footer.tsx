import React from 'react'
import mail from '../assets/social media/logo email2.png'
import logo from '../assets/Entreprise_image/logo.jpeg'
import localisation from '../assets/social media/localiser2.png'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const Footer: React.FC = () => {
  const { t } = useLanguage()

  return (
    <footer className="w-full bg-gray-950 text-gray-300 pt-10 pb-6 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-gray-800">

        {/* Brand */}
        <div className="flex flex-col gap-3">
          <img src={logo} alt="Bikoan logo" className="h-12 w-auto rounded-lg object-cover" />
          <p className="text-sm leading-relaxed text-gray-400">{t.footer.description}</p>
        </div>

        {/* Pages */}
        <div>
          <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">{t.footer.pages}</h3>
          <ul className="flex flex-col gap-2 text-sm">
            {[
              { to: '/home',       label: t.nav.home },
              { to: '/nosproduit', label: t.nav.nosProduits },
              { to: '/apropos',    label: t.nav.apropos },
              { to: '/contact',    label: t.nav.contact },
              { to: '/connexion',  label: t.nav.connexion },
              { to: '/inscription',label: t.nav.inscription },
            ].map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="hover:text-green-400 transition duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">{t.footer.legal}</h3>
          <ul className="flex flex-col gap-2 text-sm">
            {[
              { to: '/condition',      label: t.footer.condition },
              { to: '/mention',        label: t.footer.mention },
              { to: '/confidentialite',label: t.footer.confidentialite },
            ].map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="hover:text-green-400 transition duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact / Follow */}
        <div>
          <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">{t.footer.followUs}</h3>
          <div className="flex flex-col gap-3 text-sm">
            <a
              href={`mailto:bikoansarl@gmail.com?subject=${encodeURIComponent('Demande de contact')}&body=${encodeURIComponent("Bonjour BIKOAN Team,\n\nJe souhaite vous contacter au sujet d'une commande.\n\nNom :\nTéléphone :\nMessage :\n")}`}
              className="flex items-center gap-2 hover:text-green-400 transition duration-200 group"
            >
              <img
                className="h-6 w-6 object-contain group-hover:scale-110 transition duration-200"
                src={mail}
                alt="Email"
              />
              <span>{t.footer.sendMail}</span>
            </a>

            <a
              href="https://www.google.com/maps/place/Entreprise+Bikoan+Sarl/@3.8967845,11.5429006,19.42z"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-green-400 transition duration-200 group"
            >
              <img
                className="h-6 w-6 object-contain group-hover:scale-110 transition duration-200"
                src={localisation}
                alt="Localisation"
              />
              <span>Localisation</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto pt-5 text-center text-xs text-gray-500">
        {t.footer.rights}
      </div>
    </footer>
  )
}

export default Footer
