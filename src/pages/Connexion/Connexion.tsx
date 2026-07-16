import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'

const Connexion: React.FC = () => {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50 flex flex-col items-center py-12 px-4">
      <motion.h2
        className="text-3xl font-bold text-green-600 italic text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
      >
        {t.connexion.title}
      </motion.h2>

      <motion.form
        action="post"
        className="w-full max-w-md flex flex-col shadow-xl rounded-3xl p-8 bg-white border border-gray-100"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.1 }}
      >
        <label htmlFor="email" className="font-bold italic mb-1 text-sm">{t.connexion.email}</label>
        <input
          type="email"
          id="email"
          required
          placeholder={t.connexion.emailPlaceholder}
          className="border border-gray-300 rounded-xl h-11 px-4 mb-5 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
        />

        <label htmlFor="password" className="font-bold italic mb-1 text-sm">{t.connexion.password}</label>
        <input
          type="password"
          id="password"
          required
          placeholder={t.connexion.passwordPlaceholder}
          className="border border-gray-300 rounded-xl h-11 px-4 mb-6 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
        />

        <motion.button
          type="button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="bg-green-600 text-white font-bold rounded-xl py-3 w-full hover:bg-green-800 transition duration-200 cursor-pointer"
        >
          {t.connexion.login}
        </motion.button>

        <p className="mt-5 text-center text-sm">
          {t.connexion.noAccount}{' '}
          <Link to="/inscription">
            <span className="font-bold italic hover:underline hover:text-green-600 transition">{t.connexion.signup}</span>
          </Link>
        </p>
      </motion.form>

      <p className="text-center text-sm text-gray-500 mt-4 italic">{t.connexion.thanks}</p>
    </div>
  )
}

export default Connexion
